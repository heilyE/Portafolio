/**
 * Rol: Modelo — Estrategia de lectura con Espaciado
 * Patrones: Strategy (implementación concreta)
 *
 * Separa cada letra de cada palabra con un espacio, facilitando
 * la lectura lenta y el análisis visual de cada carácter.
 */

class EstrategiaLecturaEspaciado {
  /**
   * Procesa el texto con el modo Espaciado.
   * Cada letra se separa por un espacio; las palabras se separan
   * por tres espacios para mantener la diferenciación visual.
   * @param {string} texto - Texto de entrada.
   * @returns {string}
   */
  procesar(texto) {
    return texto
      .trim()
      .split(' ')
      .map((palabra) => palabra.split('').join('\u2009'))
      .join('   ');
  }
}

export default EstrategiaLecturaEspaciado;
