"use strict";
// INTERFACES (type x interface)
;
const bot1 = {
    id: 1,
    name: "Robô"
};
const bot2 = {
    id: 1,
    name: "Robô",
    sayHello: function () {
        throw new Error("Função não implementada.");
    },
};
console.log(bot1);
console.log(bot2);
// Quando usar Interfaces
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return (`hello i'm ${this.name}`);
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
