// Interfaces (type x interface)

// type (mais usados para tipar os atributos)
type robot = {
    readonly id: number;
    name: string;
};

// inteface - (mais usada para trabalhar com classes)
interface robot2 {
    readonly id: number;
    name: string;
    sayHi(): string;
}

const bot1: robot = {
    id: 1,
    name: "Wall-E"
}

const bot2: robot2 = {
    id: 2,
    name: "Megatron",

    sayHi: function (): string {
        return "Hi!!";
    }
}


class Pessoa implements robot2 {
    id: number;
    name: string;
    
    constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHi(): string {
        return `Hi!!! I'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Homie");
console.log(p.sayHi());