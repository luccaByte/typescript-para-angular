"use strict";
//DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ExibirNome(target) {
    console.log(target);
}
// decorators é uma função experimental, para habilitar precisa ir no tsconfig e descomentar "experimentalDecorators"
let funcionario = class funcionario {
};
funcionario = __decorate([
    ExibirNome
], funcionario);
let Quincas = class Quincas {
};
Quincas = __decorate([
    ExibirNome // decora um método e da o gatilho para executar uma ação
], Quincas);
// CLASS DECORATOR
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
// ATRIBUTE DECORATOR
function minLength(length) {
    return (target, key) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Api {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    minLength(3)
], Api.prototype, "name", void 0);
const api = new Api("produtos");
console.log(api.name);
