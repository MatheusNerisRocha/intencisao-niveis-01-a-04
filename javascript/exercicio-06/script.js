/*

6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

*/

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

function subtraction(num1,num2){
   return num1 - num2
}

alert(`O resultado da subtração é: ${subtraction(num1,num2)}`)