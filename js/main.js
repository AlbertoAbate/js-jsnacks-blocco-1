// jsnack2
var parola1 = prompt("scrivi una parola");
var parola2 = prompt("scrivi una seconda parola");

if (parola1.length > parola2.length) {
  console.log(parola2 + " " + parola1);
}
else if (parola2.length > parola1.length) {
  console.log(parola1 + " " + parola2);
}
else if (parola1 == parola2) {
  console.log('pareggio');
}


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
