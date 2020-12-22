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
