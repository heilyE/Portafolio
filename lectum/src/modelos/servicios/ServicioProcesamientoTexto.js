/**
 * Rol: Modelo — Servicio de dominio para el procesamiento de texto
 * Patrones: Strategy (contexto), MVC (capa Modelo)
 *
 * Actúa como contexto del patrón Strategy: delega el procesamiento
 * real a la estrategia configurada. NO manipula el DOM.
 */

class ServicioProcesamientoTexto {
  /**
   * @param {Object} estrategia - Implementación concreta de Strategy.
   */
  constructor(estrategia) {
    this._estrategia = estrategia;
  }

  /**
   * Reemplaza la estrategia de lectura en tiempo de ejecución.
   * @param {Object} estrategia - Nueva estrategia a utilizar.
   */
  establecerEstrategia(estrategia) {
    this._estrategia = estrategia;
  }

  /**
   * Aplica la estrategia configurada al texto recibido.
   * @param {string} texto - Texto de entrada.
   * @returns {string} Texto procesado.
   * @throws {Error} Si no hay estrategia configurada.
   */
  procesar(texto) {
    if (!this._estrategia) {
      throw new Error('[ServicioProcesamientoTexto] No se ha establecido una estrategia de lectura.');
    }
    return this._estrategia.procesar(texto);
  }
}

export default ServicioProcesamientoTexto;
