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
};

const bot1: robot = {
    id: 1,
    name: "Robô"
};

const bot2: robot2 = {
    id: 1,
    name: "Robô"
};

console.log (bot1);
console.log (bot2);