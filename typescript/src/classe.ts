//classes
class Personagem {
    nome: string;
    forca: number;
    habilidade: number;

    constructor (nome: string, forca: number, habilidade: number) {
        this.nome = nome;
        this.forca = forca;
        this.habilidade = habilidade;
    }

    ataque(): void {
        console.log(`Atacou com ${this.forca} pontos.`)
    }
}


//Personagem: superclass
//mago: subclass
class mago extends Personagem {
    pontosMagicos: number;
    constructor(nome: string, forca: number, habilidade: number, pontosMagicos: number){
        super(nome, forca, habilidade);
        this.pontosMagicos = pontosMagicos;
    }
}

const p1 = new Personagem('Jinx', 10, 8);
const p2 = new mago("Ryze", 4, 10, 99);
console.log(p1);
console.log(p2);
p1.ataque();