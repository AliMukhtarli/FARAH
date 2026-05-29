/**
 * Azerbaijani-style thousand separator using "." (e.g. 8000 → "8.000").
 */
export function formatValue(value, format) {
  if (format === 'thousand-dot') {
    return value.toLocaleString('de-DE');
  }
  return value.toString();
}
