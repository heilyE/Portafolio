/**
 * Rol: Vista (MVC) — Vista principal de la aplicación Lectum
 * Patrones: MVC (Vista)
 *
 * Orquesta los tres componentes visuales de la UI (entrada, selector
 * de modo y salida). No contiene lógica de negocio: solo expone métodos
 * para leer/escribir en el DOM y para registrar manejadores de eventos
 * que serán provistos por el Controlador.
 */

import ComponenteEntradaTexto        from './componentes/ComponenteEntradaTexto.js';
import ComponenteSelectorModoLectura from './componentes/ComponenteSelectorModoLectura.js';
import ComponenteSalidaTexto         from './componentes/ComponenteSalidaTexto.js';

class VistaLectum {
  constructor() {
    this._entradaTexto  = new ComponenteEntradaTexto('entradaTexto');
    this._selectorModo  = new ComponenteSelectorModoLectura('selectorModo');
    this._salidaTexto   = new ComponenteSalidaTexto('salidaTexto');
    this._botonProcesar = document.getElementById('btnProcesar');
  }

  // ─── Lectura desde la vista ───────────────────────────────────────────

  /** @returns {string} Texto escrito por el usuario. */
  obtenerTextoEntrada() {
    return this._entradaTexto.obtenerTexto();
  }

  /** @returns {string} Modo de lectura actualmente seleccionado. */
  obtenerModoSeleccionado() {
    return this._selectorModo.obtenerModo();
  }

  // ─── Escritura en la vista ────────────────────────────────────────────

  /**
   * Rellena el textarea con un texto (p.ej. al restaurar estado previo).
   * @param {string} texto
   */
  establecerTextoEntrada(texto) {
    this._entradaTexto.establecerTexto(texto);
  }

  /**
   * Selecciona un modo en el selector (p.ej. al restaurar estado previo).
   * @param {string} modo
   */
  establecerModo(modo) {
    this._selectorModo.establecerModo(modo);
  }

  /**
   * Muestra el resultado del procesamiento en el área de salida.
   * @param {string} texto
   */
  mostrarResultado(texto) {
    this._salidaTexto.limpiarError();
    this._salidaTexto.mostrarTexto(texto);
  }

  /**
   * Muestra un mensaje de error en el área de salida.
   * @param {string} mensaje
   */
  mostrarError(mensaje) {
    this._salidaTexto.mostrarError(mensaje);
  }

  // ─── Registro de eventos (solo el Controlador pasa los manejadores) ──

  /**
   * Registra el manejador que se ejecuta al hacer clic en "Procesar".
   * @param {Function} manejador
   */
  alProcesar(manejador) {
    if (this._botonProcesar) {
      this._botonProcesar.addEventListener('click', manejador);
    }
  }
}

export default VistaLectum;
