import { useState } from 'react'

export default function Home({ record, onGioca }) {
  const [modalita, setModalita] = useState('misto')
  const opzioni = [
    { id: 'M', label: 'Uomini' },
    { id: 'F', label: 'Donne' },
    { id: 'misto', label: 'Misto' },
  ]

  return (
    <div className="fade-in max-w-xl mx-auto text-center pt-10">
      <div className="text-6xl mb-4">🏃‍♂️🏅</div>
      <h1 className="text-5xl font-black tracking-tight text-white">
        Atletica <span className="text-cyan-400">Draft</span>
      </h1>
      <p className="mt-4 text-slate-400 leading-relaxed">
        Drafta atleti leggendari, uno per ogni evento sorteggiato. Falli gareggiare contro
        avversari di ogni epoca e accumula punti in base al piazzamento. Sei il miglior direttore
        sportivo di sempre?
      </p>

      <div className="mt-8">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Modalità</div>
        <div className="inline-flex rounded-xl bg-slate-800 p-1 gap-1">
          {opzioni.map((o) => (
            <button
              key={o.id}
              onClick={() => setModalita(o.id)}
              className={[
                'px-5 py-2 rounded-lg text-sm font-semibold transition',
                modalita === o.id ? 'bg-cyan-400 text-slate-900' : 'text-slate-300 hover:bg-slate-700',
              ].join(' ')}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onGioca(modalita)}
        className="mt-8 w-full sm:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 text-lg font-black shadow-xl hover:scale-105 transition"
      >
        ▶ Gioca
      </button>

      <div className="mt-8 text-slate-400">
        🏆 Record migliore: <span className="font-bold text-amber-300">{record}</span> punti
      </div>
    </div>
  )
}
