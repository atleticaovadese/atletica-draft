import { ISO2 } from '../data/bandiere.js'

// Riquadro 4:3 coerente per tutte le bandiere (flag-icons e SVG storiche).
const BOX = 'inline-block w-5 h-[15px] rounded-[2px] ring-1 ring-black/20 align-[-3px] overflow-hidden shrink-0'

function SvgFlag({ titolo, children }) {
  return (
    <svg viewBox="0 0 4 3" className={BOX} role="img" aria-label={titolo}>
      <title>{titolo}</title>
      {children}
    </svg>
  )
}

// Bandiere storiche/neutre senza corrispettivo moderno: disegnate a mano (stilizzate).
const STORICHE = {
  // Unione Sovietica: campo rosso con stella d'oro nel cantone.
  URS: (t) => (
    <SvgFlag titolo={t}>
      <rect width="4" height="3" fill="#CD0000" />
      <polygon
        fill="#FFD700"
        points="1,0.35 1.106,0.654 1.428,0.661 1.171,0.856 1.264,1.164 1,0.98 0.736,1.164 0.829,0.856 0.572,0.661 0.894,0.654"
      />
    </SvgFlag>
  ),
  // Germania Est: tricolore orizzontale nero-rosso-oro con emblema dorato al centro.
  GDR: (t) => (
    <SvgFlag titolo={t}>
      <rect width="4" height="1" y="0" fill="#000000" />
      <rect width="4" height="1" y="1" fill="#DD0000" />
      <rect width="4" height="1" y="2" fill="#FFCE00" />
      <g fill="none" stroke="#FFCE00" strokeWidth="0.1">
        <circle cx="2" cy="1.5" r="0.42" />
        <path d="M1.7 1.32 L2.3 1.68 M2.3 1.32 L1.7 1.68" />
      </g>
    </SvgFlag>
  ),
  // Antille Olandesi: campo bianco, banda blu orizzontale e rossa verticale, stelle bianche.
  AHO: (t) => (
    <SvgFlag titolo={t}>
      <rect width="4" height="3" fill="#FFFFFF" />
      <rect width="4" height="0.7" y="1.15" fill="#0033A0" />
      <rect width="0.7" height="3" x="1.65" fill="#CE1126" />
      <circle cx="0.9" cy="1.5" r="0.16" fill="#FFFFFF" />
      <circle cx="3.1" cy="1.5" r="0.16" fill="#FFFFFF" />
    </SvgFlag>
  ),
}

// Mostra una piccola bandiera per il codice nazione (IOC). Ordine:
//  1) bandiera storica disegnata (URS/GDR/AHO)
//  2) bandiera moderna via flag-icons (mappa IOC→ISO2)
//  3) segnaposto neutro grigio (ANA, codici sconosciuti)
export default function Bandiera({ nazione }) {
  const storica = nazione && STORICHE[nazione]
  if (storica) return storica(nazione)

  const iso2 = nazione && ISO2[nazione]
  if (iso2) return <span title={nazione} className={`fi fi-${iso2} ${BOX}`} />

  return (
    <SvgFlag titolo={nazione || '—'}>
      <rect width="4" height="3" fill="#475569" />
      <circle cx="2" cy="1.5" r="0.5" fill="#64748b" />
    </SvgFlag>
  )
}
