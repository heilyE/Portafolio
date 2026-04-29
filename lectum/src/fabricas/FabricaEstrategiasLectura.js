/**
 * Rol: Fábrica — Creación de estrategias de lectura
 * Patrones: Factory
 *
 * Centraliza la instanciación de las estrategias concretas de lectura.
 * El resto de la aplicación no necesita conocer qué clase concreta
 * implementa cada modo; solo invoca FabricaEstrategiasLectura.crear(modo).
 */

import EstrategiaLecturaNormal      from '../modelos/servicios/estrategias/EstrategiaLecturaNormal.js';
import EstrategiaLecturaEspaciado   from '../modelos/servicios/estrategias/EstrategiaLecturaEspaciado.js';
import EstrategiaLecturaMayusculas  from '../modelos/servicios/estrategias/EstrategiaLecturaMayusculas.js';
import { MODOS_LECTURA }            from '../utilidades/Constantes.js';

class FabricaEstrategiasLectura {
  /**
   * Crea y devuelve la estrategia correspondiente al modo indicado.
   * Si el modo no se reconoce se devuelve la estrategia Normal.
   * @param {string} modo - Valor de MODOS_LECTURA.
   * @returns {EstrategiaLecturaNormal|EstrategiaLecturaEspaciado|EstrategiaLecturaMayusculas}
   */
  static crear(modo) {
    switch (modo) {
      case MODOS_LECTURA.ESPACIADO:
        return new EstrategiaLecturaEspaciado();
      case MODOS_LECTURA.MAYUSCULAS:
        return new EstrategiaLecturaMayusculas();
      case MODOS_LECTURA.NORMAL:
      default:
        return new EstrategiaLecturaNormal();
    }
  }
}

export default FabricaEstrategiasLectura;
