// =========================================================================
// PERSISTENZA — record migliore su localStorage, separato per tipo e modalità
// Forma salvata: { meeting: {M,F,misto}, mondiale: {M,F,misto} }
// =========================================================================
const RECORD_KEY = 'atleticaDraft.record'
const MODI = ['M', 'F', 'misto']
const TIPI = ['meeting', 'mondiale']

const vuoto = () => ({
  meeting: { M: 0, F: 0, misto: 0 },
  mondiale: { M: 0, F: 0, misto: 0 },
})

const intero = (v) => {
  const n = parseInt(v, 10)
  return Number.isFinite(n) && n > 0 ? n : 0
}

// Legge i record. Migra i formati precedenti:
//  - numero secco (v1)                  → meeting.misto
//  - { M, F, misto } (v2)               → meeting.{M,F,misto}
//  - { normale|meeting, mondiale } (v3) → usato così com'è (normale → meeting)
export function leggiRecords() {
  try {
    const raw = localStorage.getItem(RECORD_KEY)
    if (!raw) return vuoto()
    const t = raw.trim()
    if (!t.startsWith('{')) {
      const out = vuoto()
      out.meeting.misto = intero(t)
      return out
    }
    const obj = JSON.parse(t)
    const out = vuoto()
    if (obj && (obj.meeting || obj.normale || obj.mondiale)) {
      const src = { meeting: obj.meeting ?? obj.normale, mondiale: obj.mondiale }
      for (const tipo of TIPI) for (const m of MODI) out[tipo][m] = intero(src?.[tipo]?.[m])
    } else {
      for (const m of MODI) out.meeting[m] = intero(obj?.[m])
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
