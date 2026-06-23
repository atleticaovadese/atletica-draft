// Helper condiviso: genera una carta con id univoco a partire dai campi grezzi.
// id = atleta(solo a-z minuscole)-anno-evento-genere → deve restare univoco.
// Usato sia dal set base curato sia dagli shard annuali (World Athletics).
export const c = (atleta, anno, nazione, genere, evento, misura) => ({
  id: `${atleta.toLowerCase().replace(/[^a-z]/g, '')}-${anno}-${evento}-${genere}`,
  atleta, anno, nazione, genere, evento, misura,
})
