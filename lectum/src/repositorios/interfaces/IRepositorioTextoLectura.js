/**
 * Rol: Repositorio — Interfaz (contrato) del repositorio de TextoLectura
 * Patrones: Repository (contrato/interfaz)
 *
 * Define los métodos que cualquier implementación concreta de
 * repositorio debe proveer. Permite desacoplar el dominio del
 * mecanismo de persistencia concreto.
 */

class IRepositorioTextoLectura {
  /**
   * Persiste un DTO de texto de lectura.
   * @param {import('../../modelos/dto/TextoLecturaDTO.js').default} dto
   */
  // eslint-disable-next-line no-unused-vars
  guardar(dto) {
    throw new Error('[IRepositorioTextoLectura] El método guardar() debe ser implementado.');
  }

  /**
   * Recupera el último DTO de texto de lectura guardado.
   * @returns {{ textoOriginal: string, modo: string }|null}
   */
  obtenerUltimo() {
    throw new Error('[IRepositorioTextoLectura] El método obtenerUltimo() debe ser implementado.');
  }
}

export default IRepositorioTextoLectura;
