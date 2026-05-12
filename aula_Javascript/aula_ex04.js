function exibirInfoProduto(produto){
    return `Produto: ${produto.nome},
    Preço: ${produto.preco.toFixed()},
    Estoque: ${produto.estoque} unidade(s).`
}

const produto1 = {
    nome: "PC GAMER!!!",
    preco: 8000.0,
    estoque: 1
}

const produto2 = {
    nome: "Mouseped",
    preco: 69.00,
    estoque: 67
}

console.log(exibirInfoProduto(produto1));
console.log(exibirInfoProduto(produto2));