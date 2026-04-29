/**
 * Rol: Modelo — Estrategia de lectura Normal
 * Patrones: Strategy (implementación concreta)
 *
 * Devuelve el texto tal cual, únicamente eliminando espacios
 * en blanco al inicio y al final.
 */

class EstrategiaLecturaNormal {
  /**
   * Procesa el texto con el modo Normal.
   * @param {string} texto - Texto de entrada.
   * @returns {string}
   */
  procesar(texto) {
    return texto.trim();
  }
}

export default EstrategiaLecturaNormal;
