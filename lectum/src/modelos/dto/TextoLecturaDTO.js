/**
 * Rol: Modelo — DTO (Data Transfer Object) para TextoLectura
 * Patrones: DTO
 *
 * Objeto plano y serializable que viaja entre las capas de la
 * aplicación (Controlador ↔ Repositorio). No contiene lógica de
 * negocio; solo transporta datos.
 */

class TextoLecturaDTO {
  /**
   * @param {Object} params
   * @param {string} params.textoOriginal  - Texto original ingresado.
   * @param {string} params.textoProcesado - Texto ya procesado.
   * @param {string} params.modo           - Modo de lectura aplicado.
   */
  constructor({ textoOriginal, textoProcesado, modo }) {
    this.textoOriginal  = textoOriginal;
    this.textoProcesado = textoProcesado;
    this.modo           = modo;
  }

  /**
   * Crea un DTO a partir de una entidad TextoLectura.
   * @param {import('../entidades/TextoLectura.js').default} entidad
   * @returns {TextoLecturaDTO}
   */
  static desdeEntidad(entidad) {
    return new TextoLecturaDTO({
      textoOriginal:  entidad.textoOriginal,
      textoProcesado: entidad.textoProcesado,
      modo:           entidad.modo,
    });
  }
}

export default TextoLecturaDTO;
