/**
 * Rol: Modelo — Estrategia de lectura en Mayúsculas
 * Patrones: Strategy (implementación concreta)
 *
 * Convierte todo el texto a mayúsculas para facilitar la
 * lectura de personas que prefieren letras en caja alta.
 */

class EstrategiaLecturaMayusculas {
  /**
   * Procesa el texto con el modo Mayúsculas.
   * @param {string} texto - Texto de entrada.
   * @returns {string}
   */
  procesar(texto) {
    return texto.trim().toUpperCase();
  }
}

export default EstrategiaLecturaMayusculas;
