import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { CONFIG } from '../config.js'

const TIPI = [
  { id: 'meeting', label: 'Meeting' },
  { id: 'mondiale', label: 'Mondiale' },
]
const GENERI = [
  { id: 'M', label: 'Uomini' },
  { id: 'F', label: 'Donne' },
  { id: 'misto', label: 'Misto' },
]

function Selettore({ opzioni, valore, onChange }) {
  return (
    <div className="inline-flex rounded-xl bg-slate-800 p-1 gap-1">
      {opzioni.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={[
            'px-5 py-2 rounded-lg text-sm font-semibold transition',
            valore === o.id ? 'bg-cyan-400 text-slate-900' : 'text-slate-300 hover:bg-slate-700',
          ].join(' ')}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default function Home({ records, onGioca }) {
  const [tipo, setTipo] = useState('meeting')
  const [genere, setGenere] = useState('misto')
  const [mostraQr, setMostraQr] = useState(false)

  const urlApp = typeof window !== 'undefined' ? window.location.origin : ''
  const record = records?.[tipo]?.[genere] ?? 0
  const etichettaTipo = TIPI.find((t) => t.id === tipo)?.label ?? ''
  const etichettaGenere = GENERI.find((g) => g.id === genere)?.label ?? ''

  return (
    <div className="fade-in max-w-xl mx-auto text-center pt-10">
      <div className="text-6xl mb-4">🏃‍♂️🏅</div>
      <h1 className="text-5xl font-black tracking-tight text-white">
        Track &amp; Field{' '}
        <span
          onClick={() => setMostraQr(true)}
          title="Mostra il QR per condividere l'app"
          className="text-cyan-400 cursor-pointer hover:underline decoration-2 underline-offset-4"
        >
          Draft
        </span>
      </h1>
      <p className="mt-4 text-slate-400 leading-relaxed">
        Drafta atleti leggendari, uno per ogni evento sorteggiato. Falli gareggiare contro
        avversari di ogni epoca e accumula punti in base al piazzamento. Sei il miglior direttore
        sportivo di sempre?
      </p>

      <div className="mt-8">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Tipo di partita</div>
        <Selettore opzioni={TIPI} valore={tipo} onChange={setTipo} />
        <p className="mt-2 text-xs text-slate-500 h-4">
          {tipo === 'mondiale'
            ? `Un anno a caso · ${CONFIG.EVENTI_PER_PARTITA_MONDIALE} discipline · tutte le carte di quell'anno`
            : `${CONFIG.EVENTI_PER_PARTITA} discipline · atleti di ogni epoca`}
        </p>
      </div>

      <div className="mt-5">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Modalità</div>
        <Selettore opzioni={GENERI} valore={genere} onChange={setGenere} />
      </div>

      <button
        onClick={() => onGioca(tipo, genere)}
        className="mt-8 w-full sm:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 text-lg font-black shadow-xl hover:scale-105 transition"
      >
        ▶ Gioca
      </button>

      <div className="mt-8 text-slate-400">
        🏆 Record {etichettaTipo} · {etichettaGenere}:{' '}
        <span className="font-bold text-amber-300">{record}</span> punti
      </div>

      {mostraQr && (
        <div
          onClick={() => setMostraQr(false)}
          className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-xs overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center shadow-2xl"
          >
            <div className="font-bold text-white">Apri Track &amp; Field Draft</div>
            <p className="mt-1 mb-4 text-xs text-slate-400">Inquadra il QR col telefono per aprire l'app</p>
            <div className="inline-block rounded-xl bg-white p-4">
              <QRCodeSVG value={urlApp} size={200} />
            </div>
            <div className="mt-3 break-all text-xs text-slate-500">{urlApp}</div>
            <button
              onClick={() => setMostraQr(false)}
              className="mt-4 rounded-lg bg-slate-800 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
