// richiesta nome
const userName = prompt("Inserisci il tuo nome");
console.log(userName);

// richiesta cognome
const userSurname = prompt("Inserisci il tuo cognome");
console.log(userSurname);

const fullName = `${userName} ${userSurname}`
console.log(fullName);

document.getElementById("nome-e-cognome").innerHTML =  fullName;


// stazione di partenza
const departure = prompt("Inserisci la stazione di partenza");
console.log(departure);

// stazione di arrivo
const arrival = prompt("Inserisci la stazione di arrivo");
console.log(arrival);

document.getElementById("tratta-da").innerHTML = departure;
document.getElementById("tratta-a").innerHTML = arrival;
