/**
 * Rol: Entrada — Punto de entrada (bootstrap) de la aplicación
 * Patrones: Singleton (vía AppLectum)
 *
 * Espera a que el DOM esté completamente cargado y luego delega el
 * arranque a la única instancia de AppLectum.
 */

import AppLectum from './app/AppLectum.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = AppLectum.obtenerInstancia();
  app.iniciar();
});
