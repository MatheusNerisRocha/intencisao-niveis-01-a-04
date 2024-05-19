/*

9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

*/

let number = Number(prompt("Digite um número"))
let resultPar = (number % 2) === 0

console.log(resultPar)

if(resultPar) {
   alert("É um número par")
} else {
   alert("Não é um número par")
}
