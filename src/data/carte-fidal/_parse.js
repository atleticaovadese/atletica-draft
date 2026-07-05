// Parser per gli shard FIDAL (graduatorie regionali).
// Ogni riga: "Nome Cognome|SOCIETÀ|PROV|misura"
//   misura: secondi (10.27), m:ss.xx (3:57.12), h:mm:ss (1:18:30) o metri (7.45)
// L'id include la regione per non collidere mai con le carte internazionali.

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z]/g, '')

// Converte la misura in numero (secondi totali per i tempi, metri per le pedane).
function parseMisura(t) {
  const parti = t.trim().split(':')
  if (parti.length === 3) {
    return parseInt(parti[0], 10) * 3600 + parseInt(parti[1], 10) * 60 + parseFloat(parti[2])
  }
  if (parti.length === 2) {
    return parseInt(parti[0], 10) * 60 + parseFloat(parti[1])
  }
  return parseFloat(t)
}

// Genera le carte FIDAL da un blocco di righe.
export function righeFidal(evento, genere, anno, regione, blocco) {
  return blocco
    .split('\n')
    .map((r) => r.trim())
    .filter((r) => r && r.includes('|'))
    .map((r) => {
      const [atleta, societa, provincia, misura] = r.split('|').map((x) => x.trim())
      return {
        id: `${slug(atleta)}-${anno}-${evento}-${genere}-${regione}`,
        atleta,
        anno,
        genere,
        evento,
        misura: parseMisura(misura),
        societa,
        provincia,
        regione,
      }
    })
}
