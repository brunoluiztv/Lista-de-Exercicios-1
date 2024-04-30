const prompt = require("prompt-sync")();

// Lê o número de maçãs compradas
const quantidade_Macas = parseInt(prompt("Digite o número de maçãs compradas:"));

// Preços por unidade
const preco_Menos_De_Doze = 0.30;
const preco_Pelo_Menos_Doze = 0.25;

// Calcula o valor total da compra
let valor_Total;

if (quantidade_Macas < 12) {
    valor_Total = quantidade_Macas * preco_Menos_De_Doze;
} else {
    valor_Total = quantidade_Macas * preco_Pelo_Menos_Doze;
}

// Exibe o valor total
console.log(`O valor total da compra é R$ ${valor_Total.toFixed(2)}.`);
