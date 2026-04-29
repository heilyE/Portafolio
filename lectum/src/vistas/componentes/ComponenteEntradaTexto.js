/**
 * Rol: Vista — Componente de entrada de texto
 * Patrones: MVC (Vista/Componente) — solo manipula el DOM, sin lógica de negocio
 *
 * Encapsula el acceso al elemento <textarea> donde el usuario
 * escribe el texto que desea procesar.
 */

class ComponenteEntradaTexto {
  /**
   * @param {string} idElemento - ID del elemento textarea en el HTML.
   */
  constructor(idElemento) {
    this._elemento = document.getElementById(idElemento);
  }

  /**
   * Devuelve el texto actualmente escrito en el textarea.
   * @returns {string}
   */
  obtenerTexto() {
    return this._elemento ? this._elemento.value : '';
  }

  /**
   * Establece el contenido del textarea.
   * @param {string} texto
   */
  establecerTexto(texto) {
    if (this._elemento) {
      this._elemento.value = texto;
    }
  }

  /** Limpia el contenido del textarea. */
  limpiar() {
    if (this._elemento) {
      this._elemento.value = '';
    }
  }
}

export default ComponenteEntradaTexto;
