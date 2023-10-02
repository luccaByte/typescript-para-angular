// FUNÇÕES

//numa função, sempre passar o tipo de dado que será recebido, exemplo: number
function addNumber(x: number, y: number): number {
    return x + y;
};

let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string):string {
    return `Hello ${name}`;
};
console.log(addToHello("Lucas"));


// FUNÇÃO MULTITYPE: suporta multi tipos em uma function

function callToPhone(phone:number | string): number | string {
    return phone;
}
console.log(callToPhone("4002 8922"));


// FUNÇÃO ASSINCRONA

// sempre retornar uma promise<> quando usar async function
async function getDataBase(id: number): Promise<number | string> {
    return "Lucas";
}