// TIPOS PRIMITIVOS: 

// boolean
let ligado: boolean = false;

// number
let idade: number = 23;
let altura: number = 1.80;

// string
let nome: string = "Lucas";

// TIPOS ESPECIAIS:

// null / nundefined
let nulo: null = null;
let indefinido: undefined = undefined;

// TIPOS ABRANGENTES:

// any / void
let retorno: void 
let retornoView: any 

// objeto - sem previsibilidade
let produto: object = {
    name: "Lucas",
    cidade: "Caraguá",
    idade: 23
};

// objeto ttipado - com previsibilidade
type Produtoloja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: Produtoloja = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5
}