/*

7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

*/


let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

function multiplication(num1,num2){
   return num1 * num2
}

alert(`O resultado da multiplicação é: ${multiplication(num1,num2)}`)