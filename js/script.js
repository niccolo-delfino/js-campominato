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
// solo se non li ripete
var semaforo = true;

while (numeriUtente.length < 6 && semaforo == true) {
  var numeroInserito = parseInt(prompt("inserisci qui x numeri"));

  if (numeriUtente.includes(numeroInserito) == false){
   numeriUtente.push(numeroInserito);
 }else {
   alert('hai già inserito questo numero, \ninseriscine uno nuovo');
   sentinella = false;
 }

}
console.log(numeriUtente);
