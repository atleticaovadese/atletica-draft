// Indice degli shard annuali. Per aggiungere un anno: crea carte/<anno>.js
// (export default di un array costruito con c) e importalo qui sotto.
import CARTE_2025 from './2025.js'
import CARTE_2024 from './2024.js'
import CARTE_2023 from './2023.js'

export const ANNI = [
  ...CARTE_2025,
  ...CARTE_2024,
  ...CARTE_2023,
]
