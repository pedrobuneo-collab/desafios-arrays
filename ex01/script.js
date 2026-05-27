let vetor = [];
let soma = 0 ;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    vetor.push(numero);
}

for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 === 0) {
        soma += vetor[i];
    }
}

alert("Vetor digitado: " + vetor.join(", ") + "\nA soma dos números pares é: " + soma);