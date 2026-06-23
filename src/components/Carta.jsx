import Badge from './Badge.jsx'
import { formatMisura } from '../logic/gioco.js'

// Colore dell'indizio in base al "tono" restituito da indizioDraft.
const TONO_INDIZIO = {
  alto: 'text-amber-300',   // élite
  medio: 'text-sky-300',    // buono
  basso: 'text-slate-400',  // outsider
  neutro: 'text-slate-400', // decennio
}

// Carta atleta cliccabile / statica.
// nascondiMisura = true → durante il draft la misura è coperta (non barare!)
// indizio = { testo, tono } opzionale, mostrato al posto del lucchetto quando la misura è nascosta.
export default function Carta({ carta, evento, onClick, selezionata, posizione, evidenzia, nascondiMisura, indizio }) {
  const cliccabile = !!onClick
  return (
    <button
      onClick={onClick}
      disabled={!cliccabile}
      className={[
        'group relative text-left rounded-xl border p-4 transition-all duration-200 w-full',
        evidenzia
          ? 'border-amber-400 bg-amber-400/10 ring-2 ring-amber-400/60'
          : 'border-slate-700 bg-slate-800/60',
        cliccabile ? 'hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-1 cursor-pointer' : '',
        selezionata ? 'border-cyan-400 ring-2 ring-cyan-400' : '',
      ].join(' ')}
    >
      {posizione != null && (
        <div
          className={[
            'absolute -top-3 -left-3 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold shadow-lg',
            posizione === 1 ? 'bg-amber-400 text-slate-900'
              : posizione === 2 ? 'bg-slate-300 text-slate-900'
              : posizione === 3 ? 'bg-amber-700 text-white'
              : 'bg-slate-600 text-white',
          ].join(' ')}
        >
          {posizione}°
        </div>
      )}

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="font-bold text-slate-100 leading-tight truncate">{carta.atleta}</div>
          <div className="text-xs text-slate-400 mt-0.5">{carta.nazione} · {carta.anno}</div>
        </div>
        <Badge className={carta.genere === 'M' ? 'bg-sky-500/20 text-sky-300' : 'bg-pink-500/20 text-pink-300'}>
          {carta.genere}
        </Badge>
      </div>

      {nascondiMisura ? (
        indizio ? (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg text-slate-600">🔒</span>
            <span className={`text-lg font-bold ${TONO_INDIZIO[indizio.tono] ?? 'text-slate-400'}`}>
              {indizio.testo}
            </span>
          </div>
        ) : (
          <div className="mt-3 text-2xl font-extrabold tabular-nums text-slate-600">🔒 ??</div>
        )
      ) : (
        <div className="mt-3 text-2xl font-extrabold tabular-nums text-cyan-300">
          {formatMisura(evento, carta.misura)}
        </div>
      )}
    </button>
  )
}
