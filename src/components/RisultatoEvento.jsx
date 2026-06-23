import Badge from './Badge.jsx'
import { formatMisura } from '../logic/gioco.js'

export default function RisultatoEvento({ ris, indice, totale, onAvanti }) {
  const { evento, genere, batteria, carta, piazzamento, punti } = ris

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="text-cyan-400 text-sm font-semibold">Risultato {indice + 1} / {totale}</div>
        <h2 className="text-3xl font-black text-white flex items-center justify-center gap-2">
          {evento.nome}
          <Badge className={genere === 'M' ? 'bg-sky-500/20 text-sky-300' : 'bg-pink-500/20 text-pink-300'}>
            {genere === 'M' ? 'U' : 'D'}
          </Badge>
        </h2>
        <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-3 rounded-xl bg-slate-800 px-5 py-3">
          <span className="text-slate-300">Il tuo atleta:</span>
          <span className="font-bold text-white">{carta.atleta}</span>
          <span className="text-2xl">
            {piazzamento === 1 ? '🥇' : piazzamento === 2 ? '🥈' : piazzamento === 3 ? '🥉' : ''}
          </span>
          <span className="font-black text-amber-300 text-lg">{piazzamento}° posto</span>
          <span className="rounded-md bg-emerald-400/20 text-emerald-300 px-2 py-1 text-sm font-bold">+{punti} pt</span>
        </div>
      </div>

      <div className="space-y-2">
        {batteria.map((b, i) => {
          const mio = b.id === carta.id
          return (
            <div
              key={b.id}
              style={{ animation: 'rowin 0.3s ease both', animationDelay: `${i * 45}ms` }}
              className={[
                'flex items-center gap-3 rounded-lg px-4 py-2.5 border',
                mio ? 'bg-amber-400/10 border-amber-400/60' : 'bg-slate-800/50 border-slate-700/50',
              ].join(' ')}
            >
              <div
                className={[
                  'h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold',
                  i === 0 ? 'bg-amber-400 text-slate-900'
                    : i === 1 ? 'bg-slate-300 text-slate-900'
                    : i === 2 ? 'bg-amber-700 text-white'
                    : 'bg-slate-600 text-white',
                ].join(' ')}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-semibold truncate ${mio ? 'text-amber-200' : 'text-slate-200'}`}>
                  {b.atleta} {mio && <span className="text-amber-400">★</span>}
                </div>
                <div className="text-xs text-slate-500">{b.nazione} · {b.anno}</div>
              </div>
              <div className={`font-bold tabular-nums ${mio ? 'text-amber-200' : 'text-slate-300'}`}>
                {formatMisura(evento, b.misura)}
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={onAvanti}
        className="mt-6 w-full py-3.5 rounded-xl bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition"
      >
        {indice + 1 < totale ? 'Prossimo evento →' : 'Vedi riepilogo finale →'}
      </button>
    </div>
  )
}
