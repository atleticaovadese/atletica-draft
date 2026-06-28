import { useState } from 'react'
import { CONFIG } from './config.js'
import {
  sorteggiaEventi,
  eventiPerModalita,
  eventoGiocabile,
  sorteggiaAnnoMondiale,
  generePerEvento,
  carteDraft,
  simulaEvento,
} from './logic/gioco.js'
import { leggiRecords, salvaRecords } from './logic/persistenza.js'
import Home from './components/Home.jsx'
import Draft from './components/Draft.jsx'
import RisultatoEvento from './components/RisultatoEvento.jsx'
import Riepilogo from './components/Riepilogo.jsx'

export default function App() {
  const [fase, setFase] = useState('home') // home | draft | risultato | riepilogo
  const [records, setRecords] = useState(leggiRecords()) // { meeting:{M,F,misto}, mondiale:{...} }
  const [tipo, setTipo] = useState('meeting') // 'meeting' | 'mondiale'
  const [modalita, setModalita] = useState('misto') // genere della partita in corso
  const [anno, setAnno] = useState(null) // anno sorteggiato (solo Mondiale)
  const [aiutiUsati, setAiutiUsati] = useState({}) // aiuti Meeting già spesi (1 a testa per partita)
  const [nuovoRecord, setNuovoRecord] = useState(false)

  const [piano, setPiano] = useState([]) // [{ evento, genere }] x EVENTI_PER_PARTITA
  const [indiceDraft, setIndiceDraft] = useState(0)
  const [carteAttuali, setCarteAttuali] = useState([])
  const [scelte, setScelte] = useState([]) // carte scelte dal giocatore
  const [risultati, setRisultati] = useState([])
  const [indiceRis, setIndiceRis] = useState(0)

  function iniziaPartita(tipoPartita, mod) {
    // In Mondiale: un anno sorteggiato + 10 eventi, tutte le carte di quell'anno.
    const annoMondiale = tipoPartita === 'mondiale' ? sorteggiaAnnoMondiale(mod) : null
    const maxEventi =
      tipoPartita === 'mondiale' ? CONFIG.EVENTI_PER_PARTITA_MONDIALE : CONFIG.EVENTI_PER_PARTITA
    const disponibili = eventiPerModalita(mod, annoMondiale)
    const n = Math.min(maxEventi, disponibili.length)
    const eventi = sorteggiaEventi(n, disponibili)
    const nuovoPiano = eventi.map((ev) => ({ evento: ev, genere: generePerEvento(mod) }))
    setTipo(tipoPartita)
    setModalita(mod)
    setAnno(annoMondiale)
    setAiutiUsati({})
    setPiano(nuovoPiano)
    setIndiceDraft(0)
    setScelte([])
    setRisultati([])
    setNuovoRecord(false)
    setCarteAttuali(carteDraft(nuovoPiano[0].evento.id, nuovoPiano[0].genere, annoMondiale))
    setFase('draft')
  }

  function scegliCarta(carta) {
    const nuoveScelte = [...scelte, carta]
    const prossimo = indiceDraft + 1

    if (prossimo < piano.length) {
      setScelte(nuoveScelte)
      setIndiceDraft(prossimo)
      setCarteAttuali(carteDraft(piano[prossimo].evento.id, piano[prossimo].genere, anno))
    } else {
      // Draft completato → simula tutti gli eventi (avversari dell'anno in Mondiale)
      const ris = piano.map((p, i) => simulaEvento(p.evento, p.genere, nuoveScelte[i], anno))
      const totale = ris.reduce((s, r) => s + r.punti, 0)
      setScelte(nuoveScelte)
      setRisultati(ris)
      setIndiceRis(0)
      if (totale > (records[tipo]?.[modalita] || 0)) {
        const nuovi = { ...records, [tipo]: { ...records[tipo], [modalita]: totale } }
        setRecords(nuovi)
        salvaRecords(nuovi)
        setNuovoRecord(true)
      }
      setFase('risultato')
    }
  }

  function avanzaRisultato() {
    if (indiceRis + 1 < risultati.length) setIndiceRis(indiceRis + 1)
    else setFase('riepilogo')
  }

  const totaleFinale = risultati.reduce((s, r) => s + r.punti, 0)

  // Segna l'aiuto come speso ed esegue l'azione (1 uso per aiuto a partita).
  function usaAiuto(id, azione) {
    if (aiutiUsati[id]) return
    azione()
    setAiutiUsati((u) => ({ ...u, [id]: true }))
  }

  // Aiuti disponibili nel draft (solo Meeting). Ciascuno agisce sulla scelta corrente.
  const corrente = piano[indiceDraft]
  const aiuti =
    tipo === 'meeting' && corrente && fase === 'draft'
      ? (() => {
          const altreGare = eventiPerModalita(modalita).filter(
            (e) => !piano.some((p) => p.evento.id === e.id),
          )
          const altroSesso = corrente.genere === 'M' ? 'F' : 'M'
          const setPianoCorrente = (patch) =>
            setPiano(piano.map((p, i) => (i === indiceDraft ? { ...p, ...patch } : p)))
          return [
            {
              id: 'gara',
              label: 'Cambia gara',
              icona: '🔀',
              usato: !!aiutiUsati.gara,
              disabilitato: altreGare.length === 0,
              azione: () => {
                const nuova = sorteggiaEventi(1, altreGare)[0]
                setPianoCorrente({ evento: nuova })
                setCarteAttuali(carteDraft(nuova.id, corrente.genere, anno))
              },
            },
            {
              id: 'sesso',
              label: 'Cambia sesso',
              icona: '⚥',
              usato: !!aiutiUsati.sesso,
              disabilitato: !eventoGiocabile(corrente.evento.id, altroSesso, anno),
              azione: () => {
                setPianoCorrente({ genere: altroSesso })
                setCarteAttuali(carteDraft(corrente.evento.id, altroSesso, anno))
              },
            },
            {
              id: 'atleti',
              label: 'Cambia atleti',
              icona: '🔄',
              usato: !!aiutiUsati.atleti,
              disabilitato: false,
              azione: () =>
                setCarteAttuali(carteDraft(corrente.evento.id, corrente.genere, anno)),
            },
            {
              id: 'taglia',
              label: 'Togli i 6 peggiori',
              icona: '✂️',
              usato: !!aiutiUsati.taglia,
              disabilitato: carteAttuali.length <= 6,
              azione: () => {
                const ordinate = [...carteAttuali].sort((a, b) =>
                  corrente.evento.ordine === 'asc' ? a.misura - b.misura : b.misura - a.misura,
                )
                setCarteAttuali(ordinate.slice(0, 6))
              },
            },
          ].filter((a) => a.id !== 'sesso' || modalita === 'misto')
        })()
      : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-4 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {fase !== 'home' && (
          <button
            onClick={() => setFase('home')}
            className="mb-6 text-sm text-slate-400 hover:text-white transition"
          >
            ← Esci al menu
          </button>
        )}

        {fase === 'home' && <Home records={records} onGioca={iniziaPartita} />}

        {fase === 'draft' && piano[indiceDraft] && (
          <Draft
            evento={piano[indiceDraft].evento}
            genere={piano[indiceDraft].genere}
            indice={indiceDraft}
            totale={piano.length}
            carte={carteAttuali}
            anno={anno}
            timerSecondi={tipo === 'mondiale' ? CONFIG.TIMER_MONDIALE : 0}
            aiuti={aiuti}
            onAiuto={usaAiuto}
            onScegli={scegliCarta}
          />
        )}

        {fase === 'risultato' && risultati[indiceRis] && (
          <RisultatoEvento
            ris={risultati[indiceRis]}
            indice={indiceRis}
            totale={risultati.length}
            onAvanti={avanzaRisultato}
          />
        )}

        {fase === 'riepilogo' && (
          <Riepilogo
            risultati={risultati}
            totale={totaleFinale}
            record={records[tipo]?.[modalita] || 0}
            anno={anno}
            nuovoRecord={nuovoRecord}
            onRigioca={() => setFase('home')}
          />
        )}
      </div>

      <footer className="max-w-6xl mx-auto text-center text-xs text-slate-600 mt-12">
        Atletica Draft · dati reali (World Athletics) · le marche iconiche sono verificate
      </footer>
    </div>
  )
}
