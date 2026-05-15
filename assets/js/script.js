/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
    {
        nome: "Cuffie",
        categoria: "Elettronica",
        prezzo: 99.99,
        rating: 4,
        immagine: "cuffie.jpg",
        disponibile: true
    },
    {
        nome: "Monitor",
        categoria: "Elettronica",
        prezzo: 199.99,
        rating: 5,
        immagine: "monitor.jpg",
        disponibile: false
    },
      {
        nome: "Mouse",
        categoria: "Elettronica",
        prezzo: 29.99,
        rating: 3,
        immagine: "mouse.jpg",
        disponibile: true
    },
      {
        nome: "Tastiera",
        categoria: "Elettronica",
        prezzo: 59.00,
        rating: 3,
        immagine: "tastiera.jpg",
        disponibile: true
    },
      {
        nome: "Smartphone",
        categoria: "Elettronica",
        prezzo: 499.99,
        rating: 4,
        immagine: "smartphone.jpg",
        disponibile: true
    },
      {
        nome: "Tablet",
        categoria: "Elettronica",
        prezzo: 169.90,
        rating: 3,
        immagine: "tablet.jpg",
        disponibile: true
    },
      {
        nome: "Tappetino",
        categoria: "Accessori",
        prezzo: 19.99,
        rating: 4,
        immagine: "tappetino.jpg",
        disponibile: false
    },
      {
        nome: "Webcam",
        categoria: "Elettronica",
        prezzo: 129.99,
        rating: 5,
        immagine: "webcam.jpg",
        disponibile: false
    },
      {
        nome: "Chiavetta USB",
        categoria: "Elettronica",
        prezzo: 9.99,
        rating: 2,
        immagine: "chiavetta.jpg",
        disponibile: true
    },
      {
        nome: "Hard Disk",
        categoria: "Elettronica",
        prezzo: 79.99,
        rating: 4,
        immagine: "hard-disk.jpg",
        disponibile: false
    },
      {
        nome: "Stampante",
        categoria: "Elettronica",
        prezzo: 119.99,
        rating: 3,
        immagine: "stampante.jpg",
        disponibile: true
    },
      {
        nome: "Casse",
        categoria: "Elettronica",
        prezzo: 49.50,
        rating: 3,
        immagine: "casse.jpg",
        disponibile: true
    }
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Nome prodotto, Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */