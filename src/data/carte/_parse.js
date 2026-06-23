// Parser degli shard annuali da World Athletics.
// Incollo blocchi di righe grezze "Nome|NAZ|misura" (una per atleta) e questo
// helper normalizza nome/nazione e converte la misura nel numero giusto in base
// al formato dell'evento. Centralizza la conversione → niente errori a mano.
import { c } from './_c.js'
import { EVENTI } from '../eventi.js'

// "m:ss.cc" / "h:mm:ss" / "9.84" / "8.95" → numero (secondi totali o metri)
function parseMisura(evento, raw) {
  const s = raw.trim()
  if (evento.formato === 'hmmss') {
    const [h, m, sec] = s.split(':')
    return Number(h) * 3600 + Number(m) * 60 + parseFloat(sec)
  }
  if (evento.formato === 'mmss') {
    const [m, sec] = s.split(':')
    return Number(m) * 60 + parseFloat(sec)
  }
  return parseFloat(s)
}

// "First LAST" o "first last" → "First Last", conservando accenti, trattini e apostrofi.
function titleCase(nome) {
  return nome
    .trim()
    .toLowerCase()
    .replace(/(^|[\s'’-])([a-zà-ÿ])/g, (_, sep, ch) => sep + ch.toUpperCase())
}

// Trasforma un blocco multilinea "Nome|NAZ|misura" nelle carte di un evento/genere/anno.
export function righe(eventoId, genere, anno, blocco) {
  const evento = EVENTI.find((e) => e.id === eventoId)
  if (!evento) throw new Error(`Evento sconosciuto: ${eventoId}`)
  return blocco
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [nome, nazione, misura] = line.split('|').map((x) => x.trim())
      return c(titleCase(nome), anno, nazione.toUpperCase(), genere, eventoId, parseMisura(evento, misura))
    })
}
