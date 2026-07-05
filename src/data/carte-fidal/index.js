// Indice degli shard FIDAL (regionali). Per aggiungere un anno/regione:
// crea carte-fidal/<anno>-<REG>.js e importalo qui sotto.
import PIE_2025 from './2025-PIE.js'

export const CARTE_FIDAL = [
  ...PIE_2025,
]

// Nomi visualizzati delle regioni (codici FIDAL).
export const NOMI_REGIONI = {
  ABR: 'Abruzzo', BAS: 'Basilicata', BZ: 'Bolzano', CAL: 'Calabria', CAM: 'Campania',
  EMI: 'Emilia-Romagna', FVG: 'Friuli-Venezia Giulia', LAZ: 'Lazio', LIG: 'Liguria',
  LOM: 'Lombardia', MAR: 'Marche', MOL: 'Molise', PIE: 'Piemonte', PUG: 'Puglia',
  SAR: 'Sardegna', SIC: 'Sicilia', TN: 'Trentino', TOS: 'Toscana', UMB: 'Umbria',
  VAO: "Valle d'Aosta", VEN: 'Veneto',
}
