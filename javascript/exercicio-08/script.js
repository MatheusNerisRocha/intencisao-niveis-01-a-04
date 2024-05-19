/*

8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

*/

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

function division(num1, num2){
   return (num1 / num2).toFixed(2)
}

alert(`O resultado da divisão é: ${division(num1,num2)}`)