/**
 * Rol: Vista — Componente selector de modo de lectura
 * Patrones: MVC (Vista/Componente) — solo manipula el DOM, sin lógica de negocio
 *
 * Encapsula el acceso al elemento <select> (o grupo de radios) que
 * permite al usuario elegir el modo de lectura a aplicar.
 */

class ComponenteSelectorModoLectura {
  /**
   * @param {string} idElemento - ID del elemento select en el HTML.
   */
  constructor(idElemento) {
    this._elemento = document.getElementById(idElemento);
  }

  /**
   * Devuelve el modo de lectura actualmente seleccionado.
   * @returns {string}
   */
  obtenerModo() {
    return this._elemento ? this._elemento.value : 'normal';
  }

  /**
   * Establece el modo de lectura en el control.
   * @param {string} modo
   */
  establecerModo(modo) {
    if (this._elemento) {
      this._elemento.value = modo;
    }
  }
}

export default ComponenteSelectorModoLectura;
