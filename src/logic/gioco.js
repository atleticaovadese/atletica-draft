// =========================================================================
// LOGICA PURA DI GIOCO (nessuna UI) — facilmente testabile
// =========================================================================
import { EVENTI } from '../data/eventi.js'
import { CARTE } from '../data/carte.js'
import { CONFIG } from '../config.js'

// Mescola un array (Fisher–Yates) senza mutare l'originale
export function mescola(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Sorteggia N eventi a caso senza ripetizioni da un insieme (default: tutti)
export function sorteggiaEventi(n, pool = EVENTI) {
  return mescola(pool).slice(0, n)
}

// Un evento è "giocabile" per un genere se ha abbastanza carte per riempire il draft.
// Con `anno` valorizzato, conta solo le carte di quell'anno (modalità Mondiale).
export function eventoGiocabile(eventoId, genere, anno) {
  return poolCarte(eventoId, genere, anno).length >= CONFIG.CARTE_NEL_DRAFT
}

// Eventi selezionabili data la modalità (il DB cresce nel tempo: gli eventi
// ancora privi di dati restano fuori finché non hanno un pool sufficiente).
//  'M'/'F' → eventi con pool sufficiente in quel genere
//  'misto' → eventi con pool sufficiente in ENTRAMBI i generi (ogni sorteggio è valido)
// Con `anno` valorizzato il conteggio è ristretto a quell'anno (Mondiale).
export function eventiPerModalita(modalita, anno) {
  const generi = modalita === 'misto' ? ['M', 'F'] : [modalita]
  return EVENTI.filter((ev) => generi.every((g) => eventoGiocabile(ev.id, g, anno)))
}

// Anni idonei per la modalità Mondiale: quelli che hanno abbastanza eventi completi
// (≥ EVENTI_PER_PARTITA_MONDIALE) per la modalità scelta. Cresce col database.
// Conta le carte per (anno, evento, genere) in un solo passaggio per restare veloce.
export function anniMondiale(modalita, minEventi = CONFIG.EVENTI_PER_PARTITA_MONDIALE) {
  const generi = modalita === 'misto' ? ['M', 'F'] : [modalita]
  const conteggi = new Map() // anno -> Map(evento -> { M, F })
  for (const c of CARTE) {
    let perEvento = conteggi.get(c.anno)
    if (!perEvento) conteggi.set(c.anno, (perEvento = new Map()))
    let g = perEvento.get(c.evento)
    if (!g) perEvento.set(c.evento, (g = { M: 0, F: 0 }))
    g[c.genere]++
  }
  const anni = []
  for (const [anno, perEvento] of conteggi) {
    let eventiOk = 0
    for (const g of perEvento.values()) {
      if (generi.every((gen) => g[gen] >= CONFIG.CARTE_NEL_DRAFT)) eventiOk++
    }
    if (eventiOk >= minEventi) anni.push(anno)
  }
  return anni.sort((a, b) => a - b)
}

// Sorteggia un anno valido per il Mondiale (null se nessun anno è idoneo).
export function sorteggiaAnnoMondiale(modalita) {
  const anni = anniMondiale(modalita)
  return anni.length ? mescola(anni)[0] : null
}

// Decide il genere di un evento in base alla modalità scelta ("M", "F" o "misto")
export function generePerEvento(modalita) {
  if (modalita === 'M' || modalita === 'F') return modalita
  return Math.random() < 0.5 ? 'M' : 'F'
}

// Tutte le carte di un evento e genere. Con `anno` filtra anche per quell'anno.
export function poolCarte(eventoId, genere, anno) {
  return CARTE.filter(
    (x) => x.evento === eventoId && x.genere === genere && (anno == null || x.anno === anno),
  )
}

// Estrai le carte per il draft (max CONFIG.CARTE_NEL_DRAFT). `anno` → solo quell'anno.
export function carteDraft(eventoId, genere, anno) {
  return mescola(poolCarte(eventoId, genere, anno)).slice(0, CONFIG.CARTE_NEL_DRAFT)
}

// Costruisci la batteria e calcola il piazzamento della carta del giocatore.
// In Mondiale (`anno` valorizzato) anche gli avversari sono di quell'anno.
export function simulaEvento(evento, genere, cartaGiocatore, anno) {
  const avversari = mescola(
    poolCarte(evento.id, genere, anno).filter((x) => x.id !== cartaGiocatore.id),
  ).slice(0, CONFIG.DIMENSIONE_BATTERIA - 1)

  const batteria = [...avversari, cartaGiocatore].sort((a, b) =>
    evento.ordine === 'asc' ? a.misura - b.misura : b.misura - a.misura,
  )

  const piazzamento = batteria.findIndex((x) => x.id === cartaGiocatore.id) + 1
  const punti = CONFIG.puntiPerPiazzamento(piazzamento)
  return { evento, genere, carta: cartaGiocatore, batteria, piazzamento, punti }
}

// Fascia di valore della carta RISPETTO AL POOL del suo evento+genere.
// Divide il pool ordinato (dal migliore al peggiore secondo evento.ordine) in tre
// terzi: élite (top), buono (medio), outsider (coda). Logica pura e testabile.
export function fasciaCarta(evento, genere, carta) {
  const ordinate = [...poolCarte(evento.id, genere)].sort((a, b) =>
    evento.ordine === 'asc' ? a.misura - b.misura : b.misura - a.misura,
  )
  const n = ordinate.length
  const r = ordinate.findIndex((x) => x.id === carta.id) // 0 = il migliore del pool
  const frazione = n <= 1 ? 0 : r / (n - 1) // 0 = top, 1 = ultimo
  if (frazione <= 1 / 3) return { chiave: 'elite', etichetta: 'élite', tono: 'alto' }
  if (frazione <= 2 / 3) return { chiave: 'buono', etichetta: 'buono', tono: 'medio' }
  return { chiave: 'outsider', etichetta: 'outsider', tono: 'basso' }
}

// Indizio da mostrare sulla carta nel draft, in base alla modalità configurata.
// Ritorna { testo, tono } oppure null se gli indizi sono disattivati ('off').
// `modo` è iniettabile per i test; di default usa CONFIG.INDIZI_DRAFT.
export function indizioDraft(evento, genere, carta, modo = CONFIG.INDIZI_DRAFT) {
  if (modo === 'decennio') {
    const dec = Math.floor(carta.anno / 10) * 10
    return { testo: `anni ${dec}`, tono: 'neutro' }
  }
  if (modo === 'fascia') {
    const f = fasciaCarta(evento, genere, carta)
    return { testo: f.etichetta, tono: f.tono }
  }
  return null // 'off' o valore non riconosciuto
}

// Formatta la misura per la visualizzazione
export function formatMisura(evento, m) {
  if (evento.formato === 'hmmss') {
    const h = Math.floor(m / 3600)
    const min = Math.floor((m % 3600) / 60)
    const sec = m - h * 3600 - min * 60
    return `${h}:${String(min).padStart(2, '0')}:${String(Math.round(sec)).padStart(2, '0')}`
  }
  if (evento.formato === 'mmss') {
    const min = Math.floor(m / 60)
    const sec = m - min * 60
    return `${min}:${sec.toFixed(2).padStart(5, '0')}`
  }
  if (evento.unita === 'm') return `${m.toFixed(2)} m`
  return `${m.toFixed(2)} s`
}
