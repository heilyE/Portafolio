/**
 * Rol: Aplicación — Bootstrap de la aplicación Lectum
 * Patrones: Singleton
 *
 * Punto de arranque de la arquitectura MVC: crea las instancias
 * únicas de la Vista y el Controlador y los conecta. Al ser Singleton
 * garantiza que la app solo se inicialice una vez, incluso si
 * AppLectum.obtenerInstancia() se llama varias veces.
 */

import VistaLectum      from '../vistas/VistaLectum.js';
import ControladorLectum from '../controladores/ControladorLectum.js';
import Configuracion    from './Configuracion.js';

class AppLectum {
  constructor() {
    if (AppLectum._instancia) {
      return AppLectum._instancia;
    }
    AppLectum._instancia = this;

    this._configuracion = Configuracion.obtenerInstancia();
    this._vista         = null;
    this._controlador   = null;
  }

  /**
   * Devuelve la única instancia de AppLectum.
   * @returns {AppLectum}
   */
  static obtenerInstancia() {
    if (!AppLectum._instancia) {
      new AppLectum();
    }
    return AppLectum._instancia;
  }

  /**
   * Crea la Vista y el Controlador, arrancando la aplicación.
   * Debe llamarse una única vez desde main.js tras el evento DOMContentLoaded.
   */
  iniciar() {
    this._vista       = new VistaLectum();
    this._controlador = new ControladorLectum(this._vista);
    console.info(`[AppLectum] v${this._configuracion.version} iniciada correctamente.`);
  }
}

/** @type {AppLectum|null} */
AppLectum._instancia = null;

export default AppLectum;
