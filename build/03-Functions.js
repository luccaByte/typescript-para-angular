"use strict";
// FUNÇÕES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//numa função, sempre passar o tipo de dado que será recebido, exemplo: number
function addNumber(x, y) {
    return x + y;
}
;
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
;
console.log(addToHello("Lucas"));
// FUNÇÃO MULTITYPE: suporta multi tipos em uma function
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("4002 8922"));
// FUNÇÃO ASSINCRONA
// sempre retornar uma promise<> quando usar async function
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Lucas";
    });
}
