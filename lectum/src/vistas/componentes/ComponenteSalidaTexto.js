/**
 * Rol: Vista — Componente de salida/resultado del texto procesado
 * Patrones: MVC (Vista/Componente) — solo manipula el DOM, sin lógica de negocio
 *
 * Encapsula el área donde se muestra el resultado del procesamiento.
 * Ofrece métodos para mostrar texto normal, errores y limpiar el área.
 */

class ComponenteSalidaTexto {
  /**
   * @param {string} idElemento - ID del elemento contenedor en el HTML.
   */
  constructor(idElemento) {
    this._elemento = document.getElementById(idElemento);
  }

  /**
   * Muestra el texto procesado en el área de salida.
   * @param {string} texto
   */
  mostrarTexto(texto) {
    if (this._elemento) {
      this._elemento.textContent = texto;
      this._elemento.classList.remove('salida-error');
    }
  }

  /**
   * Muestra un mensaje de error destacado en el área de salida.
   * @param {string} mensaje
   */
  mostrarError(mensaje) {
    if (this._elemento) {
      this._elemento.textContent = `⚠️ ${mensaje}`;
      this._elemento.classList.add('salida-error');
    }
  }

  /** Elimina la clase de error sin limpiar el contenido. */
  limpiarError() {
    if (this._elemento) {
      this._elemento.classList.remove('salida-error');
    }
  }

  /** Limpia completamente el área de salida. */
  limpiar() {
    if (this._elemento) {
      this._elemento.textContent = '';
      this._elemento.classList.remove('salida-error');
    }
  }
}

export default ComponenteSalidaTexto;
