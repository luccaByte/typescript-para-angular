"use strict";
// ESRUTURA BÁSICA DE UMA CLASSE
/*
    DATA MODIFIERS:
    public
    private: somente a classe onde a expressão foi colocada poderá acessar
    protected: classes e sub classes conseguem acessar as expressões dadas como protected
*/
class character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
// character: super classe ou classe pai
// Magician: Sub classe ou  classe filha
class Magician extends character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill); // o método super deve estar passando primeiro que o this.
        this.magicPoints = magicPoints;
    }
}
const p1 = new character("Ryu", 10, 98); // "Ryu" não será passado pois a expressão name está como private
p1.attack(); // como "attack" já está passando um console.log, não precisa passar de novo fora da estrutura
const p2 = new Magician("Mago", 89, 30, 100);
