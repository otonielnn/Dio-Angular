type Hero = {
    nome: String;
    vulgo: String;
    telefone: String;
}

function ligarPara(heroi: Hero) {
    return "Ligando para :" + heroi.telefone;
}

ligarPara({
    nome: "Otoniel",
    vulgo: "Spider-Man",
    telefone: "4002-8922"
})