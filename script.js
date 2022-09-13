/*
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;

  Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

  - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

  Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
  O resultado final desse desafio deve ser algo em torno de:
*/

alert("Insira dois números para começar.")
let number_one = prompt("Insira o primeiro número:")
let number_two = prompt("Insira o segundo número:")

number_one = Number(number_one)
number_two = Number(number_two)

let sum = number_one + number_two
let sub = (number_one - number_two) * -1
let mult = number_one * number_two
let div = number_one / number_two
let rest_div = number_one % number_two
let impar = sum % 2

div = div.toFixed(2)

alert(`A soma dos números informados é: ${sum} 
A subtração dos dois números informados é: ${sub} 
A multiplicação dos dois números números informados é: ${mult} 
A divisão dos dois números números informados é: ${div} 
O resto da divisão dos dois números informados é: ${rest_div}`)


if( impar == 0 ) {
  alert(`A soma dos dois números é Par`)
}else {
  alert("A soma dos dois números é Ímpar")
}

if(number_one == number_two) {
  alert("Os números digitados são iguais.")
}else {
  alert("Os números digitados são diferente")
}