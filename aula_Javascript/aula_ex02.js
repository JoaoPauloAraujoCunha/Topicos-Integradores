/*function saudacao(nome){
    return "Olá," + nome + "!"
}

console.log(saudacao("Cyber"));

//const anonimo
const soma = function (a,b){
    return a + b;
}

console.log(soma(60,7));

const multipicacao = (x,y) => x * y;
console.log(multipicacao(6,9))
*/
const pessoa ={
    nomeUsuario: "João Paulo",
    idade: 20,
    email:"joao.pauloac2006@gmail.com.br",
    usuario: "CyberEmberfell",
    saudar: () => {
        return `Oi, meu nome e ${pessoa.nomeUsuario}, e eu sou ${pessoa.usuario}.`;
    }
}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());