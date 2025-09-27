function calcularTroco(){
    let totalCompra = Number(document.getElementById("txttotalcompra").value)
    let dinheiro = Number(document.getElementById("txtdinheiro").value)
    let troco = dinheiro - totalCompra

    document.getElementById("txttroco").value = troco.toFixed(2).replace('.',',')
}


function adicionarProduto(){
    let valorProduto = Number(document.getElementById("txtvalorproduto").value)
    let totalCompra = Number(document.getElementById("txttotalcompra").value)
    let tabela = document.getElementById("tableprodutos")
    let quantidadeItens = tabela.childElementCount

    totalCompra += valorProduto

    let linha = document.createElement('tr')
    let coluna1 = document.createElement('td')
    let coluna2 = document.createElement('td')

    coluna1.innerHTML = `Produto ${quantidadeItens}`
    coluna2.innerHTML = `R$ ${valorProduto.toFixed(2).replace('.',',')}`

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    tabela.appendChild(linha)

    document.getElementById("txtvalorproduto").value = ''
    document.getElementById("txttotalcompra").value = totalCompra
}


