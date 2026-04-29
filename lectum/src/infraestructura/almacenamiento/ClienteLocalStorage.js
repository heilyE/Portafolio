/**
 * Rol: Infraestructura — Adaptador/Wrapper para localStorage
 * Patrones: Singleton
 *
 * Provee una capa de abstracción sobre localStorage que centraliza
 * la serialización/deserialización JSON y maneja errores de forma
 * uniforme. Al ser Singleton garantiza una única instancia en toda
 * la aplicación.
 */

class ClienteLocalStorage {
  constructor() {
    if (ClienteLocalStorage._instancia) {
      return ClienteLocalStorage._instancia;
    }
    ClienteLocalStorage._instancia = this;
  }

  /**
   * Devuelve la única instancia de ClienteLocalStorage.
   * @returns {ClienteLocalStorage}
   */
  static obtenerInstancia() {
    if (!ClienteLocalStorage._instancia) {
      new ClienteLocalStorage();
    }
    return ClienteLocalStorage._instancia;
  }

  /**
   * Persiste un valor (serializado como JSON) bajo la clave indicada.
   * @param {string} clave
   * @param {*} valor
   */
  guardar(clave, valor) {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`[ClienteLocalStorage] Error al guardar "${clave}":`, error);
    }
  }

  /**
   * Recupera y deserializa el valor almacenado bajo la clave indicada.
   * @param {string} clave
   * @returns {*} El valor deserializado, o null si no existe o hay error.
   */
  obtener(clave) {
    try {
      const valor = localStorage.getItem(clave);
      return valor !== null ? JSON.parse(valor) : null;
    } catch (error) {
      console.error(`[ClienteLocalStorage] Error al obtener "${clave}":`, error);
      return null;
    }
  }

  /**
   * Elimina la entrada con la clave indicada.
   * @param {string} clave
   */
  eliminar(clave) {
    localStorage.removeItem(clave);
  }
}

/** @type {ClienteLocalStorage|null} */
ClienteLocalStorage._instancia = null;

export default ClienteLocalStorage;
