# ROADMAP

Stato attuale e prossimi passi. Ogni voce è pensata come un task autonomo da dare a
Claude Code. Le fasi base del brief sono completate.

## Fatto

- [x] Setup React + Vite + Tailwind
- [x] Dati separati (`data/eventi.js`, `data/carte.js`) — set BASE curato 308 carte, 1959–2026
- [x] Logica pura (`logic/gioco.js`): sorteggio eventi, draft, simulazione batteria, punteggio
- [x] Schermata Draft (12 carte, **misura nascosta** per non rendere il gioco banale)
- [x] Simulazione + schermata Risultati evento con classifica
- [x] Riepilogo finale + Rigioca
- [x] Persistenza del record migliore (`localStorage`)
- [x] Modalità Uomini / Donne / Misto
- [x] Smoke test della logica (`npm run test:smoke`)
- [x] Test automatici con Vitest (`npm test`) — `src/logic/gioco.test.js`, 36 test
- [x] Indizi opzionali nel draft (`CONFIG.INDIZI_DRAFT`: off / decennio / fascia) — ora su 'off'
- [x] Eventi e carte estesi: ostacoli (110/100m), 1500m, peso, disco, giavellotto
- [x] Revisione dati di metà lista (correzioni Walsh, Čeh, Bugár, Russell)
- [x] Programma eventi completo (20 eventi) + formati `mmss`/`hmmss` + motore "eventi giocabili"
- [x] Architettura dati scalabile: set BASE + shard annuali (`carte/<anno>.js`, parser `righe()`)

## Database grande (in corso) — top ~50/atleta per evento per anno, a ritroso da World Athletics

Obiettivo: tutti gli eventi del programma, anno per anno dal 2025 indietro. Stato:

- [x] **2025–2004 COMPLETI** — tutti i 20 eventi (M+F) per ogni stagione, ~1800–2000 carte/anno
- [ ] 2003, 2002, … a ritroso (i dati WA sono ricchi dal ~2001, più radi prima)

Carte totali attuali: **~43.400** (BASE 308 + shard 2025→2004). Procedura in `CLAUDE.md`.
Mondiale: 22 anni sorteggiabili (2004–2025).

## Regionali (dataset FIDAL, in corso)

- [x] Modalità **Regionali**: come Mondiale (anno sorteggiato, 10 discipline, timer) + aiuti;
  regione selezionabile; carte con società (provincia) al posto della bandiera
- [x] **Piemonte 2025** — Assoluti outdoor, top 25 per evento/genere (~900 carte, 18 eventi giocabili)
- [x] **Piemonte 2024** — ~900 carte, 19 eventi giocabili; sorteggio ora tra 2024 e 2025
- [ ] Altri anni Piemonte (2023, 2022, … il form FIDAL arriva al 2005)
- [ ] Altre regioni (basta `scripts/estrai_fidal.mjs` + 1 riga in `carte-fidal/index.js`)
- [ ] Loghi delle società (idea per dopo)
NB: raccogliere gli anni UNO ALLA VOLTA (agenti sequenziali) — fetch paralleli su
più anni fanno scattare il 403 (rate-limit) di World Athletics.
Suggerimento: gli anni si possono raccogliere in parallelo con sub-agenti (uno per anno),
poi assemblare e verificare centralmente (unicità id + copertura + build).

Procedura in `CLAUDE.md` → "Ingestione dati per anno".

## Altri prossimi passi

1. **Rifinitura UX**: transizioni tra schermate, micro-feedback alla scelta della carta,
   schermata di caricamento simulazione, responsività su mobile.

3. **Storico partite**: salva le ultime N partite in `localStorage` e mostra uno storico
   nella Home (oltre al solo record).

## Idee per dopo (fuori scope iniziale)

- Sistema di rarità/crediti per il draft (budget da spendere sulle carte migliori).
- Avversari "intelligenti" che draftano anziché carte casuali.
- Animazione della gara in tempo reale.
- Condivisione del risultato (immagine/sticker del riepilogo).
