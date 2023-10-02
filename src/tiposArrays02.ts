// 2 Formas de declarar um ARRAY

// tipo 1
let dados: string[] = ["Lucas", "Carol", "Adriana", "Ana"];

// tipo 2 
let dados2: Array<string> = ["Lucas", "Carol", "Adriana", "Ana"];


// ARRAY MULTITYPE: armazena dois ou mais tipos de conteúdos em um array só

let infos: (string | number)[] = ["Lucas", 23, "Ana", 40];

// Array do tipo Tupla

let boleto:[string, number, number] = ["agua conta", 199.90, 19248129]; // Tem que respeitar a ordem da variável

// ARRAYS MÉTODOS

dados.pop();

// Datas

let aniversario: Date = new Date("2023-10-02 13:51");
console.log(aniversario.toString());