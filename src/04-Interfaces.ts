// INTERFACES (type x interface)

// TYPE são mais utilizados para tipar o conteúdo
type robot = {
    readonly id: number | string;
    name: string;
};

// INTERFACE são mais utilizados quando vamos trabalhar com classes
// * readonly: propriedade somente leitura, que não poderá mudar seu valor depois que declarado
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: robot = {
    id: 1,
    name: "Robô"
};

const bot2: robot2 = {
    id: 1,
    name: "Robô", 
    sayHello: function():string {
        throw new Error("Função não implementada.");
    },
};

console.log (bot1);
console.log (bot2);


// Quando usar Interfaces

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return (`hello i'm ${this.name}`);
    }
}

const p = new Pessoa (1, "gutsman")
console.log(p.sayHello());