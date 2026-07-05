import { useEffect, useRef, useState } from 'react'
import Badge from './Badge.jsx'
import Carta from './Carta.jsx'
import BarraProgresso from './BarraProgresso.jsx'
import { indizioDraft } from '../logic/gioco.js'
import { CONFIG } from '../config.js'

// Sottotitolo che spiega l'aiuto disponibile in base alla modalità degli indizi.
const SPIEGA_INDIZIO = {
  fascia: 'Indizio: fascia di valore (élite / buono / outsider) rispetto al pool.',
  decennio: 'Indizio: il decennio della prestazione.',
}

export default function Draft({ evento, genere, indice, totale, carte, badge, timerSecondi, aiuti, onAiuto, onScegli }) {
  // L'indizio è uguale per tutte le carte del draft → calcolo il testo guida una volta.
  const haIndizio = carte.length > 0 && indizioDraft(evento, genere, carte[0]) != null

  // Timer per scelta (solo Mondiale): countdown che riparte a ogni draft; allo
  // scadere pesca una carta a caso. I ref evitano closure stantie nell'intervallo.
  const [rimanente, setRimanente] = useState(timerSecondi || 0)
  const onScegliRef = useRef(onScegli)
  const carteRef = useRef(carte)
  onScegliRef.current = onScegli
  carteRef.current = carte

  useEffect(() => {
    if (!timerSecondi) return
    let r = timerSecondi
    setRimanente(r)
    const id = setInterval(() => {
      r -= 1
      setRimanente(r)
      if (r <= 0) {
        clearInterval(id)
        const c = carteRef.current
        onScegliRef.current(c[Math.floor(Math.random() * c.length)])
      }
    }, 1000)
    return () => clearInterval(id)
  }, [indice, timerSecondi])

  const quasiScaduto = timerSecondi > 0 && rimanente <= 5

  return (
    <div className="fade-in max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <div className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
            <span>Draft {indice + 1} / {totale}</span>
            {badge && (
              <Badge className="bg-amber-400/20 text-amber-300">{badge}</Badge>
            )}
          </div>
          <h2 className="text-3xl font-black text-white flex items-center gap-3">
            {evento.nome}
            <Badge className={genere === 'M' ? 'bg-sky-500/20 text-sky-300' : 'bg-pink-500/20 text-pink-300'}>
              {genere === 'M' ? 'Uomini' : 'Donne'}
            </Badge>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Scegli 1 atleta. {evento.ordine === 'asc' ? 'Vince il tempo più basso.' : 'Vince la misura più alta.'}{' '}
            <span className="text-slate-500">
              La misura è nascosta: fidati di atleta e annata.
              {haIndizio && ' ' + SPIEGA_INDIZIO[CONFIG.INDIZI_DRAFT]}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          {timerSecondi > 0 && (
            <div className="w-full sm:w-44">
              <div
                className={[
                  'flex items-center justify-between text-sm font-bold tabular-nums',
                  quasiScaduto ? 'text-red-400' : 'text-amber-300',
                ].join(' ')}
              >
                <span>⏱ Tempo</span>
                <span className={quasiScaduto ? 'pop' : ''}>{rimanente}s</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
                <div
                  className={[
                    'h-full rounded-full transition-all duration-1000 ease-linear',
                    quasiScaduto ? 'bg-red-500' : 'bg-amber-400',
                  ].join(' ')}
                  style={{ width: `${(rimanente / timerSecondi) * 100}%` }}
                />
              </div>
            </div>
          )}
          <BarraProgresso indice={indice} totale={totale} />
        </div>
      </div>

      {aiuti && (
        <div className="mb-5">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Aiuti · 1 uso ciascuno</div>
          <div className="flex flex-wrap gap-2">
            {aiuti.map((a) => {
              const spento = a.usato || a.disabilitato
              return (
                <button
                  key={a.id}
                  onClick={() => onAiuto(a.id, a.azione)}
                  disabled={spento}
                  title={a.usato ? 'Aiuto già usato' : a.disabilitato ? 'Non disponibile ora' : a.label}
                  className={[
                    'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition',
                    spento
                      ? 'border-slate-800 bg-slate-800/40 text-slate-600 cursor-not-allowed line-through'
                      : 'border-slate-600 bg-slate-800 text-slate-200 hover:border-cyan-400 hover:text-white',
                  ].join(' ')}
                >
                  <span className="not-italic no-underline">{a.icona}</span>
                  {a.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {carte.map((carta) => (
          <Carta
            key={carta.id}
            carta={carta}
            evento={evento}
            onClick={() => onScegli(carta)}
            nascondiMisura
            indizio={indizioDraft(evento, genere, carta)}
          />
        ))}
      </div>
    </div>
  )
}
