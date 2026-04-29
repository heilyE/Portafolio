/**
 * Rol: Repositorio — Implementación con localStorage
 * Patrones: Repository
 *
 * Implementación concreta de IRepositorioTextoLectura que persiste
 * los datos del texto y del modo de lectura en localStorage a través
 * del ClienteLocalStorage (Singleton).
 */

import IRepositorioTextoLectura from './interfaces/IRepositorioTextoLectura.js';
import { CLAVES_STORAGE } from '../utilidades/Constantes.js';

class RepositorioTextoLecturaLocalStorage extends IRepositorioTextoLectura {
  /**
   * @param {import('../infraestructura/almacenamiento/ClienteLocalStorage.js').default} clienteStorage
   */
  constructor(clienteStorage) {
    super();
    this._cliente = clienteStorage;
  }

  /**
   * Persiste el texto original y el modo de lectura del DTO.
   * @param {import('../modelos/dto/TextoLecturaDTO.js').default} dto
   */
  guardar(dto) {
    this._cliente.guardar(CLAVES_STORAGE.ULTIMO_TEXTO, dto.textoOriginal);
    this._cliente.guardar(CLAVES_STORAGE.ULTIMO_MODO,  dto.modo);
  }

  /**
   * Recupera el último texto y modo guardados.
   * @returns {{ textoOriginal: string, modo: string }|null}
   */
  obtenerUltimo() {
    const textoOriginal = this._cliente.obtener(CLAVES_STORAGE.ULTIMO_TEXTO);
    const modo          = this._cliente.obtener(CLAVES_STORAGE.ULTIMO_MODO);

    if (textoOriginal === null || modo === null) {
      return null;
    }

    return { textoOriginal, modo };
  }
}

export default RepositorioTextoLecturaLocalStorage;
