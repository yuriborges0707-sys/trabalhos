function ehPalindromo(texto) {
    let normalizado = (texto.toLowerCase().match(/[a-z0-9]/g)|| []).join('');

    let pilha = [];
    for (let ch of normalizado) {
        pilha.push(ch);
    }

    for (let ch of normalizado){
        let topo =pilha.pop();
        if (ch !== topo) {
            return false;
        }
    }

    return true;
}

console.log(ehPalindromo("Socorram-me, subi no ônibus em Marrocos"));
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("Olá mundo"));

