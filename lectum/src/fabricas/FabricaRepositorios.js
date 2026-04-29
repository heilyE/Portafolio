/**
 * Rol: Fábrica — Creación de repositorios
 * Patrones: Factory, Singleton (via ClienteLocalStorage)
 *
 * Centraliza la construcción de los repositorios concretos,
 * inyectando sus dependencias (como el ClienteLocalStorage Singleton).
 */

import RepositorioTextoLecturaLocalStorage from '../repositorios/RepositorioTextoLecturaLocalStorage.js';
import ClienteLocalStorage                 from '../infraestructura/almacenamiento/ClienteLocalStorage.js';

class FabricaRepositorios {
  /**
   * Crea y devuelve un repositorio de textos de lectura respaldado
   * por localStorage.
   * @returns {RepositorioTextoLecturaLocalStorage}
   */
  static crearRepositorioTexto() {
    const cliente = ClienteLocalStorage.obtenerInstancia();
    return new RepositorioTextoLecturaLocalStorage(cliente);
  }
}

export default FabricaRepositorios;
