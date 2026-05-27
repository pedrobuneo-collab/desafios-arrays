let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro:`)));
}

let numeroBusca = parseInt(prompt("Digite um número para verificar quantas vezes ele aparece:"));

let vezesQueAparece = numeros.filter(num => num === numeroBusca).length;

alert(`O número ${numeroBusca} aparece ${vezesQueAparece} vezes no vetor.\n\nTodos os números: ${numeros.join(", ")}`);