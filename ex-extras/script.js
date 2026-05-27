let contagemRegressiva = "";

for (let i = 30; i >= 1; i--) {
    if (i % 4 === 0) { 
        contagemRegressiva += `[${i}] `;
    } else {
        contagemRegressiva += `${i} `;
    }
}
alert(contagemRegressiva);