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

- [x] **2025 COMPLETO** — tutti i 20 eventi (M+F), ~1850 carte → 20/20 eventi giocabili
- [x] **2024 COMPLETO** — tutti i 20 eventi (M+F), ~1850 carte
- [x] **2023 COMPLETO** — tutti i 20 eventi (M+F), ~1770 carte
- [ ] 2022 — tutti i 20 eventi (prossimo)
- [ ] 2021, 2020, … a ritroso (i dati WA sono ricchi dal ~2001, più radi prima)

Carte totali attuali: ~5750 (BASE 308 + shard 2025 + 2024 + 2023). Procedura in `CLAUDE.md`.

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
