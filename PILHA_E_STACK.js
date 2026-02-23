function ehPalindromo(texto) {
  
  function isAlfanumerico(c) {
    const codigo = c.charCodeAt(0);
    
    if (codigo >= 48 && codigo <= 57) return true;
    
    if (codigo >= 97 && codigo <= 122) return true;
    
    if (codigo >= 65 && codigo <= 90) return true;
    return false;
  }

  
  let textoNormalizado = "";
  for (let c of texto) {
    if (isAlfanumerico(c)) {
      textoNormalizado += c.toLowerCase();
    }
  }

  
  const pilha = []; 
  const fila = [];  

  
  for (let c of textoNormalizado) {
    pilha.push(c);
    fila.push(c);
  }

  
  while (pilha.length > 0 && fila.length > 0) {
    const daPilha = pilha.pop();   
    const daFila = fila.shift();   
    if (daPilha !== daFila) {
      return false;
    }
  }

  return true;
}

console.log(ehPalindromo("Renner")); 
console.log(ehPalindromo("Roma me tem amor"));
console.log(ehPalindromo("Bom dia"));
