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

export default function Draft({ evento, genere, indice, totale, carte, onScegli }) {
  // L'indizio è uguale per tutte le carte del draft → calcolo il testo guida una volta.
  const haIndizio = carte.length > 0 && indizioDraft(evento, genere, carte[0]) != null
  return (
    <div className="fade-in max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <div className="text-cyan-400 text-sm font-semibold">Draft {indice + 1} / {totale}</div>
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
        <BarraProgresso indice={indice} totale={totale} />
      </div>

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
