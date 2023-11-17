"use strict";
// Interfaces (type x interface)
const bot1 = {
    id: 1,
    name: "Wall-E"
};
const bot2 = {
    id: 2,
    name: "Megatron",
    sayHi: function () {
        return "Hi!!";
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHi() {
        return `Hi!!! I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Homie");
console.log(p.sayHi());
