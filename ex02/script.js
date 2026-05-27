let numeros = [];
for (let i = 0; i < 7; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(numeroAleatorio);
}

alert("Aqui estão seus numeros, atulize a pagina se quiser outros !")
alert("Valores gerados aleatoriamente:\n" + numeros.join(", "));