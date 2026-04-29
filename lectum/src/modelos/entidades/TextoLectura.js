/**
 * Rol: Modelo — Entidad de dominio TextoLectura
 * Patrones: ninguno (entidad de dominio pura, SIN manipulación de DOM)
 *
 * Representa el objeto de dominio que encapsula un texto, su versión
 * procesada y el modo de lectura aplicado.
 */

class TextoLectura {
  /**
   * @param {Object} params
   * @param {string} params.textoOriginal   - Texto ingresado por el usuario.
   * @param {string} params.textoProcesado  - Texto resultante tras aplicar la estrategia.
   * @param {string} params.modo            - Modo de lectura utilizado.
   * @param {Date}   [params.fechaCreacion] - Fecha de creación (por defecto: ahora).
   */
  constructor({ textoOriginal, textoProcesado, modo, fechaCreacion = new Date() }) {
    this.textoOriginal  = textoOriginal;
    this.textoProcesado = textoProcesado;
    this.modo           = modo;
    this.fechaCreacion  = fechaCreacion;
  }
}

export default TextoLectura;
