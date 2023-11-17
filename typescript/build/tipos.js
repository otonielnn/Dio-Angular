"use strict";
/* tipos primitivos:
*    - boolean
*    - number
     - string */
let ligado = false;
let nome = "otoniel";
let idade = 21;
let altura = 1.81;
/* tipos especiais:
*    - undefined
*    - null */
let nulo = null;
let indefinido = undefined;
/* tipos abrangentes
*    - any
*    - void */
let retorno;
let retornoView = false;
// objeto - sem previsibilidade
let produto = {
    name: "otoniel",
    cidade: "São Lourenço da Mata",
    idade: 31,
};
let meuProduto = {
    nome: "Fone de Ouvido",
    preco: 89.99,
    unidades: 7
};
// Arrays
let dados = ["Otoniel", "Jorge", "Hugo"];
let dados2 = ["Otoniel", "Jorge", "Hugo"];
// Array multi tipos
let infos = ["otoniel", 21, "Jorge", 18];
// Tuplas
let boleto = ["Conta de Água", 199.9, 40028922];
// Datas
let aniversario = new Date("2023-11-16 21:59");
console.log(aniversario.toString());
