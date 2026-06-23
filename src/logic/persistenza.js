// =========================================================================
// PERSISTENZA — record migliore su localStorage
// =========================================================================
const RECORD_KEY = 'atleticaDraft.record'

export function leggiRecord() {
  try {
    return parseInt(localStorage.getItem(RECORD_KEY) || '0', 10) || 0
  } catch {
    return 0
  }
}

export function salvaRecord(v) {
  try {
    localStorage.setItem(RECORD_KEY, String(v))
  } catch {
    // localStorage non disponibile: ignora
  }
}
