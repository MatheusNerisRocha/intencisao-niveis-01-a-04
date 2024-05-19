/*
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/

    let num1 = Number(prompt("Digite o primeiro número"))
    let num2 = Number(prompt("Digite o segundo número"))
    
    function sum(num1,num2) {
        return num1 + num2
    }

    alert(`O resultado da soma é: ${sum(num1,num2)}`)


