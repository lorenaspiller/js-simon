/*
Simon Says
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


$(function() {
//Un alert() espone 5 numeri generati casualmente.
var numeriGenerati = generatoreNumeri(1, 20, 5);
alert(numeriGenerati);
console.log(numeriGenerati);


var secondi = 5;
var countDown = setInterval(function () {
  console.log(secondi);
  if (secondi <=0) {
    clearInterval(countDown);

    var arrayUtente = [];
    var arrayUtenteGiusti = [];


    for (var i = 0; i < 5; i++) {
      var numeroUtente = parseInt(prompt("Inserisci i numeri che hai appena visto"));
      if ( isNaN(numeroUtente)) {
        alert("Attenzione! inserisci un numero!");
        i-=1;
      } else if (trovaInArray(arrayUtente, numeroUtente)) {
        alert("Attenzione! Hai già inserito questo numero!");
        i-=1;
      } else {

        arrayUtente.push(numeroUtente);

        var trovato = trovaInArray(numeriGenerati, numeroUtente);

        if (trovato) {
          arrayUtenteGiusti.push(numeroUtente);
        }
      }
    }

    alert("Hai indovinato " + arrayUtenteGiusti.length + " numeri! \nQuesti sono i numeri indovinati: " + arrayUtenteGiusti);
  } else {
    secondi-= 1;
  }
}, 1000);



});


//trovaInArray()
/**
 * trovaInArray - funzione che mi permette di trovare un elemento all'interno di un array
 *
 * @param  {var array}            array     seleziono l'array
 * @param  {number || string}     elemento  elemento da trovare nell'array
 * @return {true || false}                  true in caso abbia trovato l'elemento nell'array, false in caso contrario
 */

function trovaInArray(array, elemento) {
  var i = 0;
  trovato = false;
  while (i < array.length) {
    if (array[i] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}

//generatoreNumeri()
/**
 * generatoreNumeri - funzione che genera n numeri random tra 1 e 100 e restituisce un array di numeri senza numeri doppi
 *
 * @param  {number} min     numero minimo
 * @param  {number} max     numero massimo
 * @param  {number} nNumeri numeri da generare
 * @return {numbers}        array di numeri random
 */

function generatoreNumeri(min, max, nNumeri) {
  var arrayNumeri = [];
  var i = 0;
  while (i < nNumeri) {
    var numeriComputer = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Controllo che i numeri generati non siano duplicati
    if (arrayNumeri.includes(numeriComputer)) {
      numeriComputer = Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    arrayNumeri.push(numeriComputer);
    i++;
  }
  return arrayNumeri;
}
