class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este e um ${this.tipo} chamado ${this.nome}`;
    }
}

const cachorro = new Animal("Thor","Doggao");
const gato = new Animal("Mingau","miauzinho");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());