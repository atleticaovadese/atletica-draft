// Indice degli shard annuali. Per aggiungere un anno: crea carte/<anno>.js
// (export default di un array costruito con c) e importalo qui sotto.
import CARTE_2025 from './2025.js'
import CARTE_2024 from './2024.js'
import CARTE_2023 from './2023.js'
import CARTE_2022 from './2022.js'
import CARTE_2021 from './2021.js'
import CARTE_2020 from './2020.js'
import CARTE_2019 from './2019.js'
import CARTE_2018 from './2018.js'

export const ANNI = [
  ...CARTE_2025,
  ...CARTE_2024,
  ...CARTE_2023,
  ...CARTE_2022,
  ...CARTE_2021,
  ...CARTE_2020,
  ...CARTE_2019,
  ...CARTE_2018,
]
