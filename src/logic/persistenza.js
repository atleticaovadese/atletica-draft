// =========================================================================
// PERSISTENZA — record migliore su localStorage, separato per tipo e modalità
// Forma salvata: { normale: {M,F,misto}, mondiale: {M,F,misto} }
// =========================================================================
const RECORD_KEY = 'atleticaDraft.record'
const MODI = ['M', 'F', 'misto']
const TIPI = ['normale', 'mondiale']

const vuoto = () => ({
  normale: { M: 0, F: 0, misto: 0 },
  mondiale: { M: 0, F: 0, misto: 0 },
})

const intero = (v) => {
  const n = parseInt(v, 10)
  return Number.isFinite(n) && n > 0 ? n : 0
}

// Legge i record. Migra i formati precedenti:
//  - numero secco (v1)            → normale.misto
//  - { M, F, misto } (v2)         → normale.{M,F,misto}
//  - { normale, mondiale } (v3)   → usato così com'è
export function leggiRecords() {
  try {
    const raw = localStorage.getItem(RECORD_KEY)
    if (!raw) return vuoto()
    const t = raw.trim()
    if (!t.startsWith('{')) {
      const out = vuoto()
      out.normale.misto = intero(t)
      return out
    }
    const obj = JSON.parse(t)
    const out = vuoto()
    if (obj && (obj.normale || obj.mondiale)) {
      for (const tipo of TIPI) for (const m of MODI) out[tipo][m] = intero(obj?.[tipo]?.[m])
    } else {
      for (const m of MODI) out.normale[m] = intero(obj?.[m])
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
