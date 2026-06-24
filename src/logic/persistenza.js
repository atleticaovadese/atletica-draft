// =========================================================================
// PERSISTENZA — record migliore su localStorage, separato per modalità
// Forma salvata: { M: number, F: number, misto: number }
// =========================================================================
const RECORD_KEY = 'atleticaDraft.record'
const MODI = ['M', 'F', 'misto']

const vuoto = () => ({ M: 0, F: 0, misto: 0 })

// Legge i record per tutte le modalità. Migra il vecchio formato (un numero
// secco) assegnandolo alla modalità "misto" (quella predefinita).
export function leggiRecords() {
  try {
    const raw = localStorage.getItem(RECORD_KEY)
    if (!raw) return vuoto()
    const t = raw.trim()
    // formato vecchio: stringa numerica → migra a "misto"
    if (!t.startsWith('{')) {
      const n = parseInt(t, 10)
      return { ...vuoto(), misto: Number.isFinite(n) && n > 0 ? n : 0 }
    }
    const obj = JSON.parse(t)
    const out = vuoto()
    for (const m of MODI) {
      const v = parseInt(obj?.[m], 10)
      if (Number.isFinite(v) && v > 0) out[m] = v
    }
    return out
  } catch {
    return vuoto()
  }
}

export function salvaRecords(records) {
  try {
    localStorage.setItem(RECORD_KEY, JSON.stringify(records))
  } catch {
    // localStorage non disponibile: ignora
  }
}
