// =========================================================================
// COSTANTI CONFIGURABILI — modifica qui le regole del gioco
// =========================================================================
export const CONFIG = {
  EVENTI_PER_PARTITA: 5,   // eventi sorteggiati in una partita Normale
  EVENTI_PER_PARTITA_MONDIALE: 10, // eventi sorteggiati in una partita Mondiale (un solo anno)
  CARTE_NEL_DRAFT: 12,     // quante carte vengono mostrate per ogni draft
  DIMENSIONE_BATTERIA: 8,  // numero di atleti in ogni batteria (giocatore + avversari)
  // Punti = DIMENSIONE_BATTERIA - piazzamento + 1  (1° = 8 punti ... 8° = 1 punto)
  puntiPerPiazzamento: (piazz) => CONFIG.DIMENSIONE_BATTERIA - piazz + 1,

  // Indizio mostrato sulle carte durante il draft (la misura resta SEMPRE nascosta):
  //  'off'      = nessun indizio (solo atleta + annata) — comportamento originale
  //  'decennio' = mostra il decennio della prestazione (es. "anni 2000")
  //  'fascia'   = mostra la fascia élite/buono/outsider rispetto al pool dell'evento
  // Tenuto su 'off': nel draft si vedono solo atleta, nazione e anno (nessun aiuto).
  INDIZI_DRAFT: 'off',
}
