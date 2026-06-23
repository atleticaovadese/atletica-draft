// =========================================================================
// Test unitari della logica pura (Vitest).  Esegui con:  npm test
// La logica in logic/gioco.js è pensata per essere testata in isolamento:
// l'unica non-determinazione è Math.random (mescola/sorteggi), quindi i casi
// "ai bordi" usano la carta migliore/peggiore del pool, che ha esito certo.
// =========================================================================
import { describe, it, expect } from 'vitest'
import { EVENTI } from '../data/eventi.js'
import { CARTE } from '../data/carte.js'
import { CONFIG } from '../config.js'
import {
  mescola,
  sorteggiaEventi,
  generePerEvento,
  poolCarte,
  carteDraft,
  simulaEvento,
  eventiPerModalita,
  fasciaCarta,
  indizioDraft,
  formatMisura,
} from './gioco.js'

const ev = (id) => EVENTI.find((e) => e.id === id)

describe('dati (carte)', () => {
  it('gli id delle carte sono tutti univoci', () => {
    const ids = CARTE.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ogni pool non vuoto ha abbastanza carte per riempire il draft', () => {
    // Il DB cresce per anno: un evento può non avere ancora dati (pool vuoto),
    // ma se ha carte devono bastare per il draft.
    for (const e of EVENTI) {
      for (const g of ['M', 'F']) {
        const n = poolCarte(e.id, g).length
        if (n > 0) expect(n).toBeGreaterThanOrEqual(CONFIG.CARTE_NEL_DRAFT)
      }
    }
  })

  it('ci sono abbastanza eventi giocabili per avviare una partita', () => {
    for (const modalita of ['M', 'F', 'misto']) {
      expect(eventiPerModalita(modalita).length).toBeGreaterThanOrEqual(CONFIG.EVENTI_PER_PARTITA)
    }
  })

  it('ogni evento giocabile in "misto" ha entrambi i pool pieni', () => {
    for (const e of eventiPerModalita('misto')) {
      expect(poolCarte(e.id, 'M').length).toBeGreaterThanOrEqual(CONFIG.CARTE_NEL_DRAFT)
      expect(poolCarte(e.id, 'F').length).toBeGreaterThanOrEqual(CONFIG.CARTE_NEL_DRAFT)
    }
  })
})

// Carta con la misura migliore di un pool (in base all'ordine dell'evento):
// per le corse (asc) la più bassa, per i salti (desc) la più alta.
function migliore(eventoId, genere) {
  const evento = ev(eventoId)
  return poolCarte(eventoId, genere).reduce((best, c) =>
    evento.ordine === 'asc'
      ? c.misura < best.misura ? c : best
      : c.misura > best.misura ? c : best,
  )
}

// Carta con la misura peggiore di un pool.
function peggiore(eventoId, genere) {
  const evento = ev(eventoId)
  return poolCarte(eventoId, genere).reduce((worst, c) =>
    evento.ordine === 'asc'
      ? c.misura > worst.misura ? c : worst
      : c.misura < worst.misura ? c : worst,
  )
}

describe('mescola', () => {
  it('non muta l\'array originale', () => {
    const orig = [1, 2, 3, 4, 5]
    const copia = [...orig]
    mescola(orig)
    expect(orig).toEqual(copia)
  })

  it('conserva esattamente gli stessi elementi', () => {
    const orig = [1, 2, 3, 4, 5, 6, 7, 8]
    const mescolato = mescola(orig)
    expect(mescolato).toHaveLength(orig.length)
    expect([...mescolato].sort((a, b) => a - b)).toEqual(orig)
  })
})

describe('sorteggiaEventi', () => {
  it('restituisce N eventi senza ripetizioni', () => {
    for (let i = 0; i < 50; i++) {
      const n = CONFIG.EVENTI_PER_PARTITA
      const evs = sorteggiaEventi(n)
      expect(evs).toHaveLength(n)
      expect(new Set(evs.map((e) => e.id)).size).toBe(n)
    }
  })

  it('restituisce eventi presi dal set ufficiale', () => {
    const idsValidi = new Set(EVENTI.map((e) => e.id))
    sorteggiaEventi(EVENTI.length).forEach((e) => {
      expect(idsValidi.has(e.id)).toBe(true)
    })
  })
})

describe('generePerEvento', () => {
  it('rispetta la modalità fissa M o F', () => {
    expect(generePerEvento('M')).toBe('M')
    expect(generePerEvento('F')).toBe('F')
  })

  it('in modalità "misto" produce sempre M o F', () => {
    for (let i = 0; i < 100; i++) {
      expect(['M', 'F']).toContain(generePerEvento('misto'))
    }
  })
})

describe('carteDraft', () => {
  it('mostra esattamente CONFIG.CARTE_NEL_DRAFT carte (eventi giocabili)', () => {
    for (const g of ['M', 'F']) {
      for (const e of eventiPerModalita(g)) {
        expect(carteDraft(e.id, g)).toHaveLength(CONFIG.CARTE_NEL_DRAFT)
      }
    }
  })

  it('non contiene carte duplicate', () => {
    for (let i = 0; i < 30; i++) {
      const ids = carteDraft('100m', 'M').map((c) => c.id)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it('restituisce solo carte dell\'evento e del genere richiesti', () => {
    carteDraft('lungo', 'F').forEach((c) => {
      expect(c.evento).toBe('lungo')
      expect(c.genere).toBe('F')
    })
  })

  it('non supera mai la dimensione del pool disponibile', () => {
    const pool = poolCarte('800m', 'M')
    expect(carteDraft('800m', 'M').length).toBeLessThanOrEqual(pool.length)
  })
})

describe('simulaEvento', () => {
  it('costruisce una batteria della dimensione configurata che include il giocatore', () => {
    const carta = carteDraft('200m', 'M')[0]
    const r = simulaEvento(ev('200m'), 'M', carta)
    expect(r.batteria).toHaveLength(CONFIG.DIMENSIONE_BATTERIA)
    expect(r.batteria.some((x) => x.id === carta.id)).toBe(true)
  })

  it('ordina la batteria in modo crescente per le corse (asc)', () => {
    const carta = carteDraft('400m', 'M')[0]
    const { batteria } = simulaEvento(ev('400m'), 'M', carta)
    const misure = batteria.map((x) => x.misura)
    expect(misure).toEqual([...misure].sort((a, b) => a - b))
  })

  it('ordina la batteria in modo decrescente per i salti (desc)', () => {
    const carta = carteDraft('alto', 'F')[0]
    const { batteria } = simulaEvento(ev('alto'), 'F', carta)
    const misure = batteria.map((x) => x.misura)
    expect(misure).toEqual([...misure].sort((a, b) => b - a))
  })

  it('piazzamento e punti sono sempre coerenti (1..N, punti = N - piazz + 1)', () => {
    const N = CONFIG.DIMENSIONE_BATTERIA
    for (let i = 0; i < 200; i++) {
      const carta = carteDraft('100m', 'M')[0]
      const r = simulaEvento(ev('100m'), 'M', carta)
      expect(r.piazzamento).toBeGreaterThanOrEqual(1)
      expect(r.piazzamento).toBeLessThanOrEqual(N)
      expect(r.punti).toBe(N - r.piazzamento + 1)
    }
  })

  it('la carta migliore del pool arriva sempre 1ª e prende il massimo dei punti (corse, asc)', () => {
    const best = migliore('100m', 'M')
    for (let i = 0; i < 100; i++) {
      const r = simulaEvento(ev('100m'), 'M', best)
      expect(r.piazzamento).toBe(1)
      expect(r.punti).toBe(CONFIG.DIMENSIONE_BATTERIA) // bordo: 1° = punti massimi
    }
  })

  it('la carta migliore del pool arriva sempre 1ª anche nei salti (desc)', () => {
    const best = migliore('lungo', 'M')
    for (let i = 0; i < 100; i++) {
      expect(simulaEvento(ev('lungo'), 'M', best).piazzamento).toBe(1)
    }
  })

  it('la carta peggiore del pool arriva sempre ultima e prende 1 punto (bordo)', () => {
    const worst = peggiore('100m', 'M')
    for (let i = 0; i < 100; i++) {
      const r = simulaEvento(ev('100m'), 'M', worst)
      expect(r.piazzamento).toBe(CONFIG.DIMENSIONE_BATTERIA)
      expect(r.punti).toBe(1) // bordo: ultimo = 1 punto
    }
  })
})

describe('fasciaCarta', () => {
  it('la carta migliore del pool è sempre "élite" (corse, asc)', () => {
    const best = migliore('100m', 'M')
    expect(fasciaCarta(ev('100m'), 'M', best).chiave).toBe('elite')
  })

  it('la carta peggiore del pool è sempre "outsider" (corse, asc)', () => {
    const worst = peggiore('100m', 'M')
    expect(fasciaCarta(ev('100m'), 'M', worst).chiave).toBe('outsider')
  })

  it('vale anche per i salti (desc): migliore = élite, peggiore = outsider', () => {
    expect(fasciaCarta(ev('lungo'), 'F', migliore('lungo', 'F')).chiave).toBe('elite')
    expect(fasciaCarta(ev('lungo'), 'F', peggiore('lungo', 'F')).chiave).toBe('outsider')
  })

  it('assegna sempre una delle tre fasce note a ogni carta del pool', () => {
    const valide = new Set(['elite', 'buono', 'outsider'])
    poolCarte('400m', 'M').forEach((c) => {
      expect(valide.has(fasciaCarta(ev('400m'), 'M', c).chiave)).toBe(true)
    })
  })
})

describe('indizioDraft', () => {
  it('modo "off" non dà alcun indizio', () => {
    const c = poolCarte('100m', 'M')[0]
    expect(indizioDraft(ev('100m'), 'M', c, 'off')).toBeNull()
  })

  it('modo "decennio" mostra il decennio della prestazione', () => {
    const bolt = CARTE.find((c) => c.id === 'usainbolt-2009-100m-M')
    expect(indizioDraft(ev('100m'), 'M', bolt, 'decennio')).toEqual({
      testo: 'anni 2000',
      tono: 'neutro',
    })
  })

  it('modo "fascia" rispecchia fasciaCarta per la carta migliore', () => {
    const best = migliore('lungo', 'M')
    expect(indizioDraft(ev('lungo'), 'M', best, 'fascia')).toEqual({
      testo: 'élite',
      tono: 'alto',
    })
  })
})

describe('formatMisura', () => {
  it('800m: secondi totali -> mm:ss.cc', () => {
    expect(formatMisura(ev('800m'), 100.91)).toBe('1:40.91')
  })

  it('800m: pad dei secondi sotto i 10 (es. 1:05.40)', () => {
    expect(formatMisura(ev('800m'), 65.4)).toBe('1:05.40')
  })

  it('800m: minuto esatto (2:00.00)', () => {
    expect(formatMisura(ev('800m'), 120)).toBe('2:00.00')
  })

  it('1500m: usa lo stesso formato mm:ss (3:26.00)', () => {
    expect(formatMisura(ev('1500m'), 206.00)).toBe('3:26.00')
  })

  it('maratona: formato h:mm:ss (7269s -> 2:01:09)', () => {
    expect(formatMisura(ev('maratona'), 7269)).toBe('2:01:09')
  })

  it('corse (unita s): due decimali col suffisso " s"', () => {
    expect(formatMisura(ev('100m'), 9.58)).toBe('9.58 s')
  })

  it('salti (unita m): due decimali col suffisso " m"', () => {
    expect(formatMisura(ev('lungo'), 8.95)).toBe('8.95 m')
    expect(formatMisura(ev('alto'), 2.45)).toBe('2.45 m')
  })

  it('arrotonda a due decimali', () => {
    expect(formatMisura(ev('100m'), 9.999)).toBe('10.00 s')
  })
})
