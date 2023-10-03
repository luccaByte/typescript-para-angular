"use strict";
// GENERICS
//"..." significa que vai aceitar diversos itens
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]); // tipo <number[]>
const stgArray = concatArray(["lucas", "goku"], ["vegeta"]); // tipo <string[]>
console.log(numArray);
console.log(stgArray);
