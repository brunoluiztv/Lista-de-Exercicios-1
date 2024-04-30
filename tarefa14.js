const prompt = require("prompt-sync")();

// Inicializa a variável 'soma' com 0. Esta variável será usada para armazenar a soma dos números decimais que o usuário digitar.
let soma = 0;

// Inicializa a variável 'contador' com 0. Esta variável será usada para contar quantos números decimais o usuário digitar.
let contador = 0;

// Usa a função 'prompt' para solicitar ao usuário que digite um número decimal. A função 'parseFloat' é usada para converter a entrada do usuário em um número decimal. O resultado é armazenado na variável 'numero'.
let numero = parseFloat(prompt("Digite um número decimal:"));

// Inicia um loop 'while' que continua até que o usuário insira '0' para o número.
while (numero !== 0) {
    // Adiciona o número digitado pelo usuário à variável 'soma'.
    soma += numero;

    // Incrementa o 'contador' em '1'. Isso é feito para cada número que o usuário digita.
    contador++;

    // Solicita ao usuário que digite outro número decimal e armazena o valor na variável 'numero'.
    numero = parseFloat(prompt("Digite outro número decimal:"));
}

// Verifica se o 'contador' é diferente de '0'. Isso é feito para evitar a divisão por zero na próxima linha.
if (contador !== 0) {
    // Se o 'contador' for diferente de '0', calcula a média aritmética dos números digitados dividindo a 'soma' pelo 'contador'. O resultado é armazenado na variável 'media'.
    let media = soma / contador;

    // Imprime a média aritmética no console.
    console.log("A média aritmética dos números digitados é " + media);
} else {
    // Se o 'contador' for '0' (ou seja, se o usuário não tiver digitado nenhum número antes de digitar '0'), imprime a mensagem "Nenhum número foi digitado." no console.
    console.log("Nenhum número foi digitado.");
}
