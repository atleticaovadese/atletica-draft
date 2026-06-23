// =========================================================================
// Smoke test della logica pura — esegui con:  node smoke-test.mjs
// Verifica dati (carte/pool), logica (sorteggio/draft/simulazione/punti) e formati.
// Non richiede dipendenze: usa solo i moduli in src/ (ESM).
// =========================================================================
import { CONFIG } from './src/config.js'
import { EVENTI } from './src/data/eventi.js'
import { CARTE } from './src/data/carte.js'
import { sorteggiaEventi, eventiPerModalita, generePerEvento, carteDraft, simulaEvento, formatMisura } from './src/logic/gioco.js'

let ok = true
const assert = (c, m) => { if (!c) { ok = false; console.log('  ✗ ' + m) } else console.log('  ✓ ' + m) }

console.log('DATI')
assert(CARTE.length >= 308, 'carte totali = ' + CARTE.length + ' (>= 308)')
const ids = CARTE.map((c) => c.id)
assert(new Set(ids).size === ids.length, 'id univoci')
// Ogni evento GIOCABILE (pool sufficiente) deve avere abbastanza carte per il draft.
let poolsOk = true
EVENTI.forEach((ev) => ['M', 'F'].forEach((g) => {
  const n = CARTE.filter((c) => c.evento === ev.id && c.genere === g).length
  if (n > 0 && n < CONFIG.CARTE_NEL_DRAFT) poolsOk = false
}))
assert(poolsOk, 'ogni pool non vuoto ha >= ' + CONFIG.CARTE_NEL_DRAFT + ' carte')
const giocabiliMisto = eventiPerModalita('misto')
assert(giocabiliMisto.length >= CONFIG.EVENTI_PER_PARTITA, 'eventi giocabili (misto) = ' + giocabiliMisto.length + ' (>= ' + CONFIG.EVENTI_PER_PARTITA + ')')

console.log('LOGICA')
const evs = sorteggiaEventi(CONFIG.EVENTI_PER_PARTITA, giocabiliMisto)
assert(evs.length === 5 && new Set(evs.map((e) => e.id)).size === 5, 'sorteggio 5 eventi senza ripetizioni')
assert(['M', 'F'].includes(generePerEvento('misto')), 'genere misto valido')
assert(carteDraft('100m', 'M').length === CONFIG.CARTE_NEL_DRAFT, 'il draft mostra ' + CONFIG.CARTE_NEL_DRAFT + ' carte')

const bolt = CARTE.find((c) => c.id === 'usainbolt-2009-100m-M')
const ev100 = EVENTI.find((e) => e.id === '100m')
let primi = 0, validi = 0
for (let i = 0; i < 200; i++) {
  const r = simulaEvento(ev100, 'M', bolt)
  if (r.piazzamento === 1) primi++
  if (r.piazzamento >= 1 && r.piazzamento <= 8 && r.punti === 8 - r.piazzamento + 1) validi++
}
assert(primi === 200, 'Bolt 9.58 sempre 1° (200 prove)')
assert(validi === 200, 'piazzamento e punti coerenti')

let tot = 0
evs.forEach((ev) => {
  const ge = generePerEvento('misto')
  const scelta = carteDraft(ev.id, ge)[0]
  tot += simulaEvento(ev, ge, scelta).punti
})
assert(tot >= 5 && tot <= 40, 'punteggio partita nel range 5–40: ' + tot)

console.log('FORMATTAZIONE')
assert(formatMisura(EVENTI.find((e) => e.id === '800m'), 100.91) === '1:40.91', '800m 100.91 -> 1:40.91')
assert(formatMisura(EVENTI.find((e) => e.id === '1500m'), 206.00) === '3:26.00', '1500m 206.00 -> 3:26.00')
assert(formatMisura(EVENTI.find((e) => e.id === 'maratona'), 7269) === '2:01:09', 'maratona 7269s -> 2:01:09')
assert(formatMisura(ev100, 9.58) === '9.58 s', '100m 9.58 -> 9.58 s')
assert(formatMisura(EVENTI.find((e) => e.id === 'lungo'), 8.95) === '8.95 m', 'lungo 8.95 -> 8.95 m')

console.log(ok ? '\nTUTTO OK' : '\nCI SONO ERRORI')
process.exit(ok ? 0 : 1)
