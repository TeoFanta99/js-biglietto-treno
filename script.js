/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


// richiesta n.di km
const kmNumber = prompt("inserisci il numero di km che vuoi percorrere");
console.log(kmNumber);


// richiesta età utente
const userAge = prompt ("inserisci la tua età");
console.log(userAge);


// calcolo del prezzo del biglietto verificando le condizioni di sconto
let ticketPrice
ticketPrice = 0.21*parseInt(kmNumber);

let ticketPriceMin
ticketPriceMin = ticketPrice - (ticketPrice*20/100);

let ticketPriceOver
ticketPriceOver = ticketPrice - (ticketPrice*40/100);


    // condizione 1: 20% off sui minorenni
    if (userAge < 18) {
        console.log((Math.round(ticketPriceMin * 100) / 100).toFixed(2));
        document.getElementById("printedPrice").innerHTML = (Math.round(ticketPriceMin * 100) / 100).toFixed(2);
    }

    // condizione 2: 40% off su over 65
    else if (userAge >= 65) {
        console.log((Math.round(ticketPriceOver * 100) / 100).toFixed(2));
        document.getElementById("printedPrice").innerHTML = (Math.round(ticketPriceOver * 100) / 100).toFixed(2);
    }

    // condizione 3: nessuna delle 2 precedenti
    else {
        console.log((Math.round(ticketPrice * 100) / 100).toFixed(2));
        document.getElementById("printedPrice").innerHTML = (Math.round(ticketPrice * 100) / 100).toFixed(2);
    }
