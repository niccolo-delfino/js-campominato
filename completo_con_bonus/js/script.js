// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var numeriPc = [];
var numeriUtente = [];
var partitaInCorso = true;
var rangeNumeri = 100;


function generaRandom(max, min) {
  while (numeriPc.length < 16) {
    var numeriRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (!numeriPc.includes(numeriRandom)) {
      numeriPc.push(numeriRandom);
    }
  }
}

function logicaGioco() {

  while (numeriUtente.length < (rangeNumeri - 16) && partitaInCorso == true) {

    var input = parseInt(prompt('Inserisci un numero \nda 1 a 100'));

    if (numeriUtente.includes(input)) {
      alert('Hai già inserito questo numero, \nritenta!');
    } else if (numeriPc.includes(input)) {
      alert('BOOM! \nHai perso, Nabbo!');
      partitaInCorso = false;
      console.log('Hai perso con numero: ' + numeriUtente.length + ' tentativi!');
    }else {
      numeriUtente.push(input);
    }

    if (numeriUtente.length == (rangeNumeri - 16) && partitaInCorso == true) {
      console.log('HAI VINTO!!!');
    }
  }

}

function chiediDifficolta(){
  var difficolta = prompt('Scegli difficoltà tra: \n0 - 1 - 2');
  switch (difficolta) {
    case "0":
      rangeNumeri = 100;
      break;
    case "1":
      rangeNumeri = 80;
      break;
    case "2":
      rangeNumeri = 50;
      break;
    default:
      alert('Difficoltà non valida! \nSelezionata difficoltà 0 di default!');

  }
}

function gioco() {
  chiediDifficolta()
  generaRandom(100, 1);
  console.log(numeriPc);
  logicaGioco();
  console.log(numeriUtente);


}

gioco();
