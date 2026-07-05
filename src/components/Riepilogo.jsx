import { CONFIG } from '../config.js'

export default function Riepilogo({ risultati, totale, record, badge, nuovoRecord, onRigioca }) {
  return (
    <div className="fade-in max-w-2xl mx-auto text-center">
      <div className="pop">
        {badge && (
          <div className="inline-block mb-3 rounded-full bg-amber-400/20 text-amber-300 text-sm font-bold px-4 py-1">
            {badge}
          </div>
        )}
        {nuovoRecord && <div className="text-amber-300 font-bold mb-2 text-lg">🎉 Nuovo record!</div>}
        <div className="text-slate-400">Punteggio finale</div>
        <div className="text-7xl font-black text-cyan-300 tabular-nums my-2">{totale}</div>
        <div className="text-slate-500">
          🏆 Record migliore: <span className="text-amber-300 font-bold">{record}</span>
        </div>
      </div>

      <div className="mt-8 space-y-2 text-left">
        {risultati.map((r, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3">
            <div className="text-2xl w-8 text-center">
              {r.piazzamento === 1 ? '🥇' : r.piazzamento === 2 ? '🥈' : r.piazzamento === 3 ? '🥉' : '🎽'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-100 truncate">
                {r.evento.nome} <span className="text-slate-500 text-sm">· {r.carta.atleta}</span>
              </div>
              <div className="text-xs text-slate-500">{r.piazzamento}° su {CONFIG.DIMENSIONE_BATTERIA}</div>
            </div>
            <div className="font-black text-emerald-300">+{r.punti}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onRigioca}
        className="mt-8 w-full sm:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 text-lg font-black shadow-xl hover:scale-105 transition"
      >
        ↺ Rigioca
      </button>
    </div>
  )
}
