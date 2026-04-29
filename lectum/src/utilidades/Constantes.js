/**
 * Rol: Utilidades — Constantes globales de la aplicación
 * Patrones: ninguno (utilidad pura, sin lógica de negocio ni DOM)
 */

/** Modos de lectura disponibles en la aplicación. */
export const MODOS_LECTURA = Object.freeze({
  NORMAL: 'normal',
  ESPACIADO: 'espaciado',
  MAYUSCULAS: 'mayusculas',
});

/** Claves utilizadas para persistir datos en localStorage. */
export const CLAVES_STORAGE = Object.freeze({
  ULTIMO_TEXTO: 'lectum_ultimo_texto',
  ULTIMO_MODO: 'lectum_ultimo_modo',
});
