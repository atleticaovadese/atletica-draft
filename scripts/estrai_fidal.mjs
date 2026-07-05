// Estrae le graduatorie FIDAL (Assoluti outdoor, top 25) e genera lo shard del gioco.
// Uso: node estrai_fidal.mjs <anno> <REGIONE> <fileOutput>
import fs from 'node:fs'

const [anno, REG, OUT] = process.argv.slice(2)
if (!anno || !REG || !OUT) { console.error('uso: node estrai_fidal.mjs 2025 PIE out.js'); process.exit(1) }

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
const TOP = 25

// evento del gioco -> codice gara FIDAL per M e F (Assoluti outdoor)
const GARE = [
  ['100m', '03', '03'], ['200m', '04', '04'], ['400m', '06', '06'],
  ['800m', '08', '08'], ['1500m', '11', '11'], ['5000m', '14', '14'], ['10000m', '15', '15'],
  ['ostacoli', 'KB', 'H2'], ['400hs', 'KQ', 'KS'], ['siepi', 'S3', 'S4'],
  ['marcia', '46', '45'],
  ['lungo', '28', '28'], ['alto', '26', '26'], ['triplo', '29', '29'], ['asta', '27', '27'],
  ['peso', 'P7', 'P4'], ['disco', 'D4', 'D1'], ['giavellotto', 'G8', 'G6'], ['martello', 'M7', 'M4'],
]

const decodeEnt = (s) => s
  .replace(/&agrave;/g, 'à').replace(/&egrave;/g, 'è').replace(/&eacute;/g, 'é')
  .replace(/&igrave;/g, 'ì').replace(/&ograve;/g, 'ò').replace(/&ugrave;/g, 'ù')
  .replace(/&amp;/g, '&').replace(/&#039;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')

// "AWUAH BAFFOUR Stephen" -> "Stephen Awuah Baffour"
function normalizzaNome(raw) {
  const tok = raw.trim().split(/\s+/)
  const cognome = [], nome = []
  for (const t of tok) (t === t.toUpperCase() && /[A-ZÀ-Ý]/.test(t) ? cognome : nome).push(t)
  const title = (w) => w.split(/([\s'-])/).map(p => /^[\s'-]$/.test(p) ? p : p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join('')
  const full = [...nome, ...cognome.map(c => title(c))].map(w => (w === w.toUpperCase() ? title(w) : w))
  return full.join(' ')
}

function parseTabella(html) {
  const righe = []
  for (const tr of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const r = tr[1]
    const mMis = r.match(/<td[^>]*><b>\s*([^<]+?)\s*<\/b>/)
    const mAtl = r.match(/href="[^"]*\/atleta\/[^"]*"[^>]*>([^<]+)</)
    const mSoc = r.match(/href="[^"]*\/societa\/[^"]*\/([A-Z]{2})[A-Z0-9]*"[^>]*>([^<]+)</)
    if (!mMis || !mAtl || !mSoc) continue
    righe.push({
      misura: mMis[1].trim(),
      atleta: normalizzaNome(decodeEnt(mAtl[1])),
      provincia: mSoc[1],
      societa: decodeEnt(mSoc[2]).trim().replace(/\|/g, '/').replace(/`/g, "'"),
    })
  }
  return righe
}

const dormi = (ms) => new Promise(r => setTimeout(r, ms))

const blocchi = []
for (const [evento, codM, codF] of GARE) {
  for (const [genere, cod] of [['M', codM], ['F', codF]]) {
    const cat = genere === 'M' ? 'XM' : 'XF'
    const url = `https://www.fidal.it/graduatorie.php?anno=${anno}&tipo_attivita=P&sesso=${genere}&categoria=${cat}&gara=${cod}&tipologia_estrazione=2&vento=0&regione=${REG}&nazionalita=1&limite=50&societa=&submit=Invia`
    let righe = []
    for (let tent = 0; tent < 3; tent++) {
      try {
        const res = await fetch(url, { headers: { 'User-Agent': UA } })
        if (res.status === 403) { console.error(`${evento}/${genere}: 403, attendo 60s...`); await dormi(60000); continue }
        righe = parseTabella(await res.text())
        break
      } catch (e) { console.error(`${evento}/${genere}: ${e.message}, riprovo...`); await dormi(5000) }
    }
    // dedup per atleta e top N
    const visti = new Set()
    const top = righe.filter(r => !visti.has(r.atleta) && visti.add(r.atleta)).slice(0, TOP)
    console.log(`${evento}/${genere}: ${top.length} atleti`)
    const testo = top.map(r => `${r.atleta}|${r.societa}|${r.provincia}|${r.misura}`).join('\n')
    blocchi.push(`  ...righeFidal('${evento}', '${genere}', ${anno}, '${REG}', \`\n${testo}\n\`),`)
    await dormi(1500)
  }
}

const file = `// Top ${TOP} per atleta — FIDAL ${REG} ${anno}, Assoluti outdoor (fonte: fidal.it/graduatorie.php).\nimport { righeFidal } from './_parse.js'\n\nexport default [\n${blocchi.join('\n')}\n]\n`
fs.writeFileSync(OUT, file)
console.log('scritto', OUT)
