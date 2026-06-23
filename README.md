# Atletica Draft

Gioco a turni in cui peschi (drafti) atleti di atletica leggera di anni specifici —
ognuno con la sua misura reale di quell'anno — e li fai gareggiare contro avversari
di anni casuali. Più piazzamenti buoni ottieni nei 5 eventi, più punti fai.

## Avvio

```bash
npm install
npm run dev      # avvia il server di sviluppo (http://localhost:5173)
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

Richiede Node 18+.

## Come si gioca

1. Si sorteggiano 5 eventi a caso tra quelli disponibili.
2. Per ogni evento vedi 12 carte casuali (atleta, nazione, anno) — **la misura è nascosta**:
   devi scommettere sul valore dell'atleta in quell'annata. Ne scegli 1.
3. Ogni evento viene simulato: la tua carta entra in una batteria da 8 con avversari
   casuali dello stesso evento e genere; si stila la classifica per misura.
4. Punti per evento = `dimensione_batteria − piazzamento + 1` (1° = 8 punti … 8° = 1).
5. La somma dei 5 eventi è il punteggio finale. Il record migliore è salvato in `localStorage`.

Modalità: **Uomini**, **Donne** o **Misto** (genere casuale per ogni evento).

## Struttura del progetto

```
src/
  config.js              # costanti di gioco (eventi/partita, dimensione batteria, punti)
  data/
    eventi.js            # definizione degli eventi (id, nome, unità, ordine asc/desc)
    carte.js             # le carte: atleta + anno + nazione + genere + misura reale
  logic/
    gioco.js             # logica pura: sorteggio, draft, simulazione, punteggio, formati
    persistenza.js       # record migliore su localStorage
  components/
    Home.jsx             # schermata iniziale + scelta modalità
    Draft.jsx            # draft dell'evento corrente (12 carte, misura nascosta)
    RisultatoEvento.jsx  # classifica della batteria + punti
    Riepilogo.jsx        # totale finale e Rigioca
    Carta.jsx            # carta atleta (riusata nel draft e nelle classifiche)
    Badge.jsx            # piccola etichetta (genere ecc.)
    BarraProgresso.jsx   # avanzamento dei 5 draft
  App.jsx                # stato e flusso di gioco (home → draft → risultati → riepilogo)
  main.jsx               # entry point React
  index.css              # Tailwind + animazioni
```

### Modello dati

```js
// Evento
{ id: '100m', nome: '100 metri', unita: 's', ordine: 'asc' }
// ordine: 'asc' = vince la misura più bassa (corse) ; 'desc' = la più alta (salti)

// Carta
{ id: 'usainbolt-2009-100m-M', atleta: 'Usain Bolt', anno: 2009,
  nazione: 'JAM', genere: 'M', evento: '100m', misura: 9.58 }
// I confronti avvengono SOLO tra stesso evento e stesso genere.
// Per gli 800m la misura è in secondi totali (es. 1:40.91 → 100.91).
```

## Nota sui dati

Le marche iconiche (record del mondo e finali olimpiche storiche) sono verificate.
Alcune prestazioni stagionali di metà lista sono attendibili ma andrebbero ricontrollate
su [World Athletics](https://worldathletics.org) se serve precisione assoluta dell'anno.

## Prossimi passi possibili

- Aggiungere eventi (ostacoli, lanci, mezzofondo) ed espandere le carte.
- Indizi sulla carta nel draft (decennio, fascia "élite/buono/outsider").
- Test automatici sulla logica (`src/logic/gioco.js` è pura e facile da testare con Vitest).
- Rarità/crediti, avversari "intelligenti", animazioni di gara.
