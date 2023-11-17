/* tipos primitivos:
*    - boolean
*    - number
     - string */

let ligado:boolean = false;
let nome: string = "otoniel";
let idade: number = 21;
let altura: number = 1.81;

/* tipos especiais:
*    - undefined
*    - null */

let nulo: null = null;
let indefinido: undefined = undefined;

/* tipos abrangentes
*    - any
*    - void */

let retorno: void;
let retornoView: any = false;

// objeto - sem previsibilidade
let produto: object = {
    name: "otoniel",
    cidade: "São Lourenço da Mata",
    idade: 31,
};

type ProdutoLoja = {
    nome: String;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Fone de Ouvido",
    preco: 89.99,
    unidades: 7
}

// Arrays

let dados: string[] = ["Otoniel", "Jorge", "Hugo"];
let dados2: Array<string> = ["Otoniel", "Jorge", "Hugo"];

// Array multi tipos

let infos: (string | number)[] = ["otoniel", 21, "Jorge", 18];

// Tuplas

let boleto:[string, number, number] = ["Conta de Água", 199.9, 40028922]

// Datas

let aniversario: Date = new Date("2023-11-16 21:59");
console.log(aniversario.toString())