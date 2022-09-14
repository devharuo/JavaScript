export abstract class Animal{
    protected nome: string;
    protected idade: number;
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;

    }
    abstract emitirSom(): void
    abstract action(): void

    }
