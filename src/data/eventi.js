// =========================================================================
// EVENTI
// ordine:  "asc"  = vince la misura PIÙ BASSA (corse, ostacoli, siepi, strada)
//          "desc" = vince la misura PIÙ ALTA  (salti, lanci)
// formato: assente = secondi semplici (sprint/ostacoli) o metri (salti/lanci)
//          "mmss"  = secondi totali, mostrati come m:ss.cc (mezzofondo/fondo/siepi)
//          "hmmss" = secondi totali, mostrati come h:mm:ss (maratona, marcia)
// wa:      percorso della toplist World Athletics ({gruppo}/{slug}) usato per
//          l'ingestione dei dati per anno. "ostacoli" ha pool diversi per genere
//          (UOMINI = 110m hs, DONNE = 100m hs), quindi waM / waF separati.
// =========================================================================
export const EVENTI = [
  // --- Velocità ---
  { id: '100m',        nome: '100 metri',              unita: 's', ordine: 'asc',  wa: 'sprints/100-metres' },
  { id: '200m',        nome: '200 metri',              unita: 's', ordine: 'asc',  wa: 'sprints/200-metres' },
  { id: '400m',        nome: '400 metri',              unita: 's', ordine: 'asc',  wa: 'sprints/400-metres' },
  // --- Mezzofondo e fondo ---
  { id: '800m',        nome: '800 metri',              unita: 's', ordine: 'asc',  formato: 'mmss', wa: 'middlelong/800-metres' },
  { id: '1500m',       nome: '1500 metri',             unita: 's', ordine: 'asc',  formato: 'mmss', wa: 'middlelong/1500-metres' },
  { id: '5000m',       nome: '5000 metri',             unita: 's', ordine: 'asc',  formato: 'mmss', wa: 'middlelong/5000-metres' },
  { id: '10000m',      nome: '10000 metri',            unita: 's', ordine: 'asc',  formato: 'mmss', wa: 'middlelong/10000-metres' },
  // --- Ostacoli e siepi ---
  { id: 'ostacoli',    nome: 'Ostacoli (110/100m)',    unita: 's', ordine: 'asc',  waM: 'hurdles/110-metres-hurdles', waF: 'hurdles/100-metres-hurdles' },
  { id: '400hs',       nome: '400 metri ostacoli',     unita: 's', ordine: 'asc',  wa: 'hurdles/400-metres-hurdles' },
  { id: 'siepi',       nome: '3000 metri siepi',       unita: 's', ordine: 'asc',  formato: 'mmss', wa: 'middlelong/3000-metres-steeplechase' },
  // --- Strada ---
  { id: 'maratona',    nome: 'Maratona',               unita: 's', ordine: 'asc',  formato: 'hmmss', wa: 'road-running/marathon' },
  { id: 'marcia',      nome: 'Marcia 20 km',           unita: 's', ordine: 'asc',  formato: 'hmmss', wa: 'race-walks/20-kilometres-race-walk' },
  // --- Salti ---
  { id: 'lungo',       nome: 'Salto in lungo',         unita: 'm', ordine: 'desc', wa: 'jumps/long-jump' },
  { id: 'alto',        nome: 'Salto in alto',          unita: 'm', ordine: 'desc', wa: 'jumps/high-jump' },
  { id: 'triplo',      nome: 'Salto triplo',           unita: 'm', ordine: 'desc', wa: 'jumps/triple-jump' },
  { id: 'asta',        nome: 'Salto con l\'asta',      unita: 'm', ordine: 'desc', wa: 'jumps/pole-vault' },
  // --- Lanci ---
  { id: 'peso',        nome: 'Getto del peso',         unita: 'm', ordine: 'desc', wa: 'throws/shot-put' },
  { id: 'disco',       nome: 'Lancio del disco',       unita: 'm', ordine: 'desc', wa: 'throws/discus-throw' },
  { id: 'martello',    nome: 'Lancio del martello',    unita: 'm', ordine: 'desc', wa: 'throws/hammer-throw' },
  { id: 'giavellotto', nome: 'Lancio del giavellotto', unita: 'm', ordine: 'desc', wa: 'throws/javelin-throw' },
]
