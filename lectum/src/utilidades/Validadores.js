/**
 * Rol: Utilidades — Validadores puros (sin DOM, sin efectos secundarios)
 * Patrones: ninguno (funciones de utilidad pura)
 */

/**
 * Verifica que el texto sea una cadena no vacía.
 * @param {*} texto - Valor a validar.
 * @returns {boolean}
 */
export function esTextoValido(texto) {
  return typeof texto === 'string' && texto.trim().length > 0;
}

/**
 * Verifica que el modo sea uno de los valores permitidos.
 * @param {string} modo - Modo a validar.
 * @param {Object} modosPermitidos - Objeto con los modos válidos (e.g. MODOS_LECTURA).
 * @returns {boolean}
 */
export function esModoValido(modo, modosPermitidos) {
  return Object.values(modosPermitidos).includes(modo);
}
