// GENERICS

//"..." significa que vai aceitar diversos itens
function concatArray<T>(...itens: T[]): T[] { // <T> significa o tipo que eu irei passar nos arrays abaixo
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]); // tipo <number[]>
const stgArray = concatArray<string[]>(["lucas", "goku"], ["vegeta"]); // tipo <string[]>

console.log(numArray);
console.log(stgArray);