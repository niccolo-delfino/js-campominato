// Creo un array per i numeri generati casualmente
var numeriPc = [];

// Creo un ciclo per generare i numeri casuali e pusharli
// solo se non si ripetono
while (numeriPc.length < 16) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
  //includes controlla se il valore è presente nell array e mi restituisce
  // un valore true o false
  // se non è presente, quindi false mi pusha il valore nell array
  if (numeriPc.includes(numeroRandom) == false){
   numeriPc.push(numeroRandom);
 }
}
console.log(numeriPc);

// Creo un array per i numeri dell'utente
var numeriUtente = [];

// Creo un ciclo per i numeri dell'utente che vanno pushati
// solo se non li ripete e se inserisce un numero vietato
// il gioco si ferma
var semaforo = true;

while (numeriUtente.length < 6 && semaforo == true) {
  var numeroInserito = parseInt(prompt("inserisci qui x numeri"));

  if (numeriPc.includes(numeroInserito) == true) {
    alert('hai perso');
    semaforo = false;
  } else if (numeriUtente.includes(numeroInserito) == false){
   numeriUtente.push(numeroInserito);
 } else {
   alert('hai già inserito questo numero, \ninseriscine uno nuovo');
 }

}
console.log(numeriUtente);

// Creo un contatore con il numero di volte in cui è stato numeroInserito
// il numero corretto e se il giocatore ha vinto o perso

if (numeriUtente.length == 6) {
  console.log('Hai vinto!');
}else {
  console.log('Hai perso con' + ' ' + numeriUtente.length + ' ' + 'tentativi');
}
