// // jsnack5
// var lista = [];
//
// for (var i = 0; i <= 5; i++) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   if (numero % 2 != 0) {
//     lista.push(numero);
//   }
// }
// console.log(lista);




// jsnack4
var partecipanti = ['paolo', 'fabio', 'lorenzo'];
var nome = prompt("inserisci il tuo nome");
var lista = false;
for (var i = 0; i < partecipanti.length; i++) {
  var item = partecipanti [i];

  if (nome == item) {
    lista = true;
  }
}
if (lista == true) {
  console.log("il suo invito è valido");
} else {
  console.log("il suo invito non è valido");
}
// // jsnack3
// somma = 0;
//
// for (var i = 0; i <= 4; i++) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   somma = somma + numero;
// }
// console.log(somma);

// // jsnack2
// var parola1 = prompt("scrivi una parola");
// var parola2 = prompt("scrivi una seconda parola");
//
// if (parola1.length > parola2.length) {
//   console.log(parola2 + " " + parola1);
// }
// else if (parola2.length > parola1.length) {
//   console.log(parola1 + " " + parola2);
// }
// else if (parola1 == parola2) {
//   console.log('pareggio');
// }


// // jsnack1
// var num1 = parseInt(prompt('scrivi un numero'));
// var num2 = parseInt(prompt('scrivi un altro numero'));
//
// if (num1 > num2) {
//   console.log(num1);
// }
// else if (num2 > num1) {
//   console.log(num2);
// } else {
//   console.log(pareggio);
// }
