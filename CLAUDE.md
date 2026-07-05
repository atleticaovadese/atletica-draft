# CLAUDE.md

Istruzioni per lavorare su questo progetto. Leggi tutto prima di modificare il codice.

## Cos'è

**Atletica Draft**: gioco a turni in React. Il giocatore drafta atleti di atletica
leggera (uno per ogni evento sorteggiato), ognuno con la sua misura reale di un anno
specifico, e li fa gareggiare in batterie contro avversari casuali. Più piazzamenti
buoni → più punti. Nessun backend: è un gioco di dati e interfaccia.

## Stack e comandi

- React 18 + Vite + Tailwind CSS. JavaScript puro (niente TypeScript).
- Stato di gioco interamente in React (`useState` in `App.jsx`). Nessuna libreria di stato.

```bash
npm install      # prima volta
npm run dev      # sviluppo su http://localhost:5173
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
npm test         # test unitari della logica (vitest run)
npm run test:watch  # vitest in watch mode durante lo sviluppo
npm run test:smoke  # smoke test dependency-free (node smoke-test.mjs)
```

Richiede Node 18+.

## Architettura — rispetta questi confini

```
src/
  config.js        # SOLO costanti di gioco. Nessuna logica complessa.
  data/            # SOLO dati statici, nessun import di React e nessuna logica.
    eventi.js      #   definizione eventi (programma completo; campo `wa` = toplist World Athletics)
    carte.js       #   set BASE curato + unione deduplicata per id (export CARTE)
    carte/
      _c.js        #     helper id-univoco (atleta-anno-evento-genere)
      _parse.js    #     righe(): parse di blocchi "Nome|NAZ|misura" → carte (case + conversione)
      index.js     #     ANNI: aggrega gli shard annuali
      2025.js …    #     uno shard per anno: top ~50/atleta da World Athletics
  logic/           # LOGICA PURA. Niente React, niente JSX, niente side-effect.
    gioco.js       #   sorteggio, draft, simulazione, punteggio, formattazione
    persistenza.js #   record migliore su localStorage (unico punto che tocca lo storage)
  components/      # SOLO componenti di presentazione. Ricevono props, non contengono
                   #   regole di gioco. Possono importare da logic/ solo helper di lettura
                   #   (es. formatMisura).
  App.jsx          # Unico "contenitore di stato": orchestra il flusso e chiama logic/.
  main.jsx         # entry point
  index.css        # Tailwind + animazioni custom
```

Regole:
- **La logica di gioco vive in `src/logic/`, mai dentro i componenti.** I componenti
  non decidono piazzamenti, punteggi o sorteggi: ricevono dati già pronti.
- **`src/logic/gioco.js` deve restare puro e deterministico-testabile.** Le funzioni
  non leggono il DOM né `localStorage`. L'unica non-determinazione è `Math.random`
  (sorteggi): isolala in `mescola`/`sorteggia*` così il resto è facile da testare.
- **Tutte le costanti regolabili stanno in `config.js`.** Se aggiungi un numero "magico"
  (dimensione batteria, carte nel draft, formula punti...), mettilo lì.
- **Modalità di gioco**: due assi indipendenti scelti nella Home. Tipo = `meeting` (5 eventi,
  atleti di ogni epoca, aiuti), `mondiale` (`sorteggiaAnnoMondiale` → un anno; 10 eventi; carte E
  avversari di quell'anno; timer) o `regionali` (come mondiale ma sul dataset FIDAL della regione
  scelta nella Home, con timer E aiuti; vedi i param opzionali `anno`/`regione` di
  `poolCarte`/`carteDraft`/`simulaEvento`/`eventiPerModalita`).
  Il **timer** (`CONFIG.TIMER_MONDIALE`, default 30s, gestito in `Draft.jsx`) riparte a ogni
  draft e allo scadere pesca una carta a caso. 0 = nessun timer.
  Genere = `M`/`F`/`misto`. I record (`persistenza.js`) sono separati per tipo×genere:
  `{ meeting, mondiale, regionali }×{M,F,misto}`, con migrazione dai formati v1/v2 (e dalla
  vecchia chiave `normale` → `meeting`).
- **Dati FIDAL (Regionali)**: shard in `data/carte-fidal/<anno>-<REG>.js` — top 25 Assoluti
  outdoor per evento/genere; la carta ha `societa`, `provincia`, `regione` (mostrati al posto
  della bandiera). Niente maratona (è su strada); marcia = 10km M / 5km F in pista.
  Estrazione automatica: `node scripts/estrai_fidal.mjs <anno> <REG> src/data/carte-fidal/<anno>-<REG>.js`
  (interroga fidal.it/graduatorie.php in sequenza, con pause), poi registra lo shard in
  `carte-fidal/index.js`. Le carte FIDAL restano SEPARATE da `CARTE` (mai mescolate nei pool).
- **Indizi nel draft** (`CONFIG.INDIZI_DRAFT`): la misura resta sempre nascosta, ma le carte
  possono mostrare un indizio — `'off'`, `'decennio'`, o `'fascia'` (élite/buono/outsider
  calcolata sul pool dell'evento). La logica è in `indizioDraft`/`fasciaCarta` (`logic/gioco.js`,
  pure e testate); `Draft.jsx` calcola l'indizio e lo passa a `Carta.jsx`, che resta presentazionale.

## Regola d'oro del dominio

> I confronti avvengono **sempre e solo** tra carte dello **stesso evento e stesso genere**.

Quindi non si normalizzano mai tempi e distanze tra eventi diversi. Per ogni evento basta
sapere se `ordine` è `"asc"` (vince la misura più bassa — corse) o `"desc"` (vince la più
alta — salti). Non introdurre punteggi cross-evento basati sulle misure grezze.

## Modello dati

```js
// Evento
{ id: '100m', nome: '100 metri', unita: 's', ordine: 'asc' }
//   ordine: 'asc' = corse/ostacoli (vince il più basso) ; 'desc' = salti/lanci (vince il più alto)
//   formato: 'mmss' (opz.) = misura in secondi totali, mostrata come m:ss.cc (800m, 1500m)
//   'ostacoli' = un solo evento, ma pool M = 110m hs e pool F = 100m hs (mai a confronto)

// Carta
{ id: 'usainbolt-2009-100m-M', atleta: 'Usain Bolt', anno: 2009,
  nazione: 'JAM', genere: 'M', evento: '100m', misura: 9.58 }
```

Convenzioni dati **da non violare**:
- `misura` è un numero. Corse in secondi; mezzofondo/fondo/siepi in **secondi totali**
  (`formato: 'mmss'`, es. `1:40.91` → `100.91`); maratona/marcia in secondi totali
  (`formato: 'hmmss'`). La conversione in `mm:ss`/`h:mm:ss` avviene solo in `formatMisura`.
- `id` è generato da `c()` (`carte/_c.js`) come `atleta(solo a-z)-anno-evento-genere`,
  **univoco**. `CARTE` è l'unione deduplicata per id (set BASE + shard annuali).
- `genere` è `'M'` o `'F'`. `nazione` è il codice a 3 lettere (anche storici: `URS`,
  `GDR`, `FRG`, `TCH`).
- Ogni combinazione **(atleta, anno, misura) deve essere reale**: i dati vengono **solo**
  dalle toplist World Athletics o da fonti verificate, **mai a memoria**.
- Un evento entra nel gioco solo quando ha ≥ `CONFIG.CARTE_NEL_DRAFT` carte nel genere
  richiesto (`eventiPerModalita` in `gioco.js`). Eventi senza dati restano fuori senza rompere.

## Come aggiungere contenuti

- **Ingestione dati per anno** (obiettivo: top ~50/atleta per evento per anno, a ritroso):
  1. Recupera la toplist da `worldathletics.org/records/toplists/<wa>/all/<men|women>/senior/<anno>`
     (il path `<wa>` è nel campo `wa`/`waM`/`waF` dell'evento in `eventi.js`).
  2. Incolla le righe grezze `Nome|NAZ|misura` (una per atleta, marche **legali**) dentro
     `carte/<anno>.js` usando `righe(eventoId, genere, anno, blocco)` — fa case e conversione.
  3. Crea lo shard `carte/<anno>.js` e importalo in `carte/index.js`.
  Per `ostacoli`: UOMINI dalla toplist 110m hs, DONNE dalla 100m hs (stesso `eventoId`).
- **Nuovo evento**: aggiungi una riga in `data/eventi.js` (con `ordine`/`formato`/`wa`).
  Compare nel gioco appena ha abbastanza carte.
- **Set BASE** (`carte.js`): nucleo iconico/storico curato a mano con `c(...)`; ha precedenza
  sugli shard in caso di id uguale.

## Stile UI

- Tema scuro. Palette: `slate` (sfondi), `cyan`/`emerald` (azione/accento), `amber` (record,
  podio), `sky`/`pink` (badge M/F). Mantieni la coerenza.
- Solo classi utility Tailwind. Animazioni custom (`fade-in`, `pop`, `rowin`) in `index.css`.
- Testi dell'interfaccia **in italiano**, come i nomi di variabili e i commenti.

## Test

- **Vitest** (`npm test`) è la suite principale: unit test della logica pura in
  `src/logic/gioco.test.js` (`simulaEvento`, `carteDraft`, `formatMisura` + helper).
  La logica in `logic/` è pensata per essere testata in isolamento; i casi "ai bordi"
  usano la carta migliore/peggiore del pool (esito certo nonostante `Math.random`).
  Aggiungi/aggiorna i test qui quando tocchi `logic/`.
- `smoke-test.mjs` (`npm run test:smoke`) resta come check dati/logica/formati
  **senza dipendenze** (gira col solo `node`): utile come sanity check veloce.

## Fuori scope (per ora)

Niente backend/login/multiplayer, niente animazioni di gara in tempo reale, niente avversario
"intelligente" che drafta (gli avversari sono carte casuali), niente sistema di rarità/crediti.
Vedi `ROADMAP.md` per le evoluzioni previste.

## Note operative

- `_test.mjs` è un alias storico di `smoke-test.mjs`: puoi eliminarlo.
