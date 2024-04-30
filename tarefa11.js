const prompt = require("prompt-sync")();

// Usa a função 'prompt' para solicitar ao usuário que digite um número inteiro e armazena o valor na variável 'numero'
let numero = prompt("Digite um número inteiro:");

// Inicia um loop 'while' que continua enquanto 'numero' for maior que 0
while (numero > 0) {
    // Verifica se 'numero' é par
    if (numero % 2 === 0) {
        // Se 'numero' é par, imprime a mensagem no console
        console.log(numero + " é PAR");
    } else {
        // Se 'numero' não é par (ou seja, é ímpar), imprime a mensagem no console
        console.log(numero + " é ÍMPAR");
    }
    // Solicita ao usuário que digite outro número inteiro e armazena o valor na variável 'numero'
    numero = prompt("Digite outro número inteiro:");
}

// Imprime a mensagem no console após o término do loop
console.log("Algoritmo encerrado.");
