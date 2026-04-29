/**
 * Rol: Controlador (MVC) — Controlador de la aplicación Lectum
 * Patrones: MVC (Controlador), Strategy (vía ServicioProcesamientoTexto),
 *           Factory (vía FabricaEstrategiasLectura y FabricaRepositorios),
 *           Repository (vía _repositorio), DTO (vía TextoLecturaDTO)
 *
 * El Controlador es deliberadamente delgado:
 *   • Recibe eventos de la Vista.
 *   • Valida la entrada con los Validadores.
 *   • Delega el procesamiento al Servicio de dominio.
 *   • Persiste el resultado vía el Repositorio.
 *   • Actualiza la Vista con el resultado.
 * No contiene lógica de negocio propia.
 */

import ServicioProcesamientoTexto from '../modelos/servicios/ServicioProcesamientoTexto.js';
import TextoLectura               from '../modelos/entidades/TextoLectura.js';
import TextoLecturaDTO            from '../modelos/dto/TextoLecturaDTO.js';
import FabricaEstrategiasLectura  from '../fabricas/FabricaEstrategiasLectura.js';
import FabricaRepositorios        from '../fabricas/FabricaRepositorios.js';
import { esTextoValido, esModoValido } from '../utilidades/Validadores.js';
import { MODOS_LECTURA }          from '../utilidades/Constantes.js';

class ControladorLectum {
  /**
   * @param {import('../vistas/VistaLectum.js').default} vista
   */
  constructor(vista) {
    this._vista       = vista;
    this._servicio    = new ServicioProcesamientoTexto(
      FabricaEstrategiasLectura.crear(MODOS_LECTURA.NORMAL)
    );
    this._repositorio = FabricaRepositorios.crearRepositorioTexto();

    this._inicializar();
  }

  // ─── Inicialización ──────────────────────────────────────────────────

  _inicializar() {
    this._cargarEstadoPrevio();
    this._vista.alProcesar(() => this._manejarProcesamiento());
  }

  /** Restaura el último texto y modo guardados en localStorage. */
  _cargarEstadoPrevio() {
    const estadoPrevio = this._repositorio.obtenerUltimo();
    if (estadoPrevio) {
      this._vista.establecerTextoEntrada(estadoPrevio.textoOriginal);
      this._vista.establecerModo(estadoPrevio.modo);
    }
  }

  // ─── Manejador del evento Procesar ───────────────────────────────────

  _manejarProcesamiento() {
    const textoOriginal = this._vista.obtenerTextoEntrada();
    const modo          = this._vista.obtenerModoSeleccionado();

    // Validación de entrada
    if (!esTextoValido(textoOriginal)) {
      this._vista.mostrarError('Por favor ingresa un texto válido antes de procesar.');
      return;
    }

    if (!esModoValido(modo, MODOS_LECTURA)) {
      this._vista.mostrarError('El modo de lectura seleccionado no es válido.');
      return;
    }

    // Selección de estrategia y procesamiento
    const estrategia    = FabricaEstrategiasLectura.crear(modo);
    this._servicio.establecerEstrategia(estrategia);
    const textoProcesado = this._servicio.procesar(textoOriginal);

    // Construcción de entidad y DTO
    const entidad = new TextoLectura({ textoOriginal, textoProcesado, modo });
    const dto     = TextoLecturaDTO.desdeEntidad(entidad);

    // Persistencia vía repositorio
    this._repositorio.guardar(dto);

    // Actualización de la vista
    this._vista.mostrarResultado(textoProcesado);
  }
}

export default ControladorLectum;
