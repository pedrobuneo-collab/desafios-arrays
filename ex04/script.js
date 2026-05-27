let original = [];

for (let i = 0; i < 10; i++) {
    original.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro:`)));
}

let semDuplicatas = [...new Set(original)];

alert(
    `Vetor Original: [ ${original.join(", ")} ]\n\n` +
    `Vetor sem Duplicatas: [ ${semDuplicatas.join(", ")} ]`
);