/**
 * Rol: Aplicación — Configuración global
 * Patrones: Singleton
 *
 * Centraliza los valores de configuración de la aplicación Lectum.
 * Al ser Singleton garantiza que toda la app lea la misma configuración.
 */

class Configuracion {
  constructor() {
    if (Configuracion._instancia) {
      return Configuracion._instancia;
    }

    /** Modo de lectura por defecto al iniciar la app. */
    this.modoDefecto = 'normal';

    /** Versión de la aplicación. */
    this.version = '1.0.0';

    Configuracion._instancia = this;
  }

  /**
   * Devuelve la única instancia de Configuracion.
   * @returns {Configuracion}
   */
  static obtenerInstancia() {
    if (!Configuracion._instancia) {
      new Configuracion();
    }
    return Configuracion._instancia;
  }
}

/** @type {Configuracion|null} */
Configuracion._instancia = null;

export default Configuracion;
