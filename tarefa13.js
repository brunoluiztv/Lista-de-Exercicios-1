const prompt = require("prompt-sync")();

// Inicia um loop 'for' que itera 5 vezes
for(let j = 1; j <= 5; j++) {
    // Usa a função 'prompt' para solicitar ao usuário que digite um número inteiro e armazena o valor na variável 'N'
    let N = prompt("Digite um número inteiro:");
    // Imprime a mensagem "Tabuada de N:" no console
    console.log(`Tabuada de ${N}:`);
    // Inicia um loop 'for' que itera de 1 até 'N'
    for(let i = 1; i <= N; i++) {
        // Imprime a tabuada de 'N' no console
        console.log(`${i} x ${N} = ${i * N}`);
    }
}
