// ESRUTURA BÁSICA DE UMA CLASSE

/*
    DATA MODIFIERS:
    public
    private: somente a classe onde a expressão foi colocada poderá acessar
    protected: classes e sub classes conseguem acessar as expressões dadas como protected
*/

class character {
    private name?: string; // "?"" transforma a expressão como expressão opcional
    stregth: number;
    skill: number;

    constructor (name: string, stregth: number, skill: number){
        this.name = name; // como o name está private, só é possível acessar ela dentro da classe, ou seja, pelo constructor
        this.stregth = stregth;
        this.skill = skill;
    }

    attack (): void {
        console.log(`Attack with ${this.stregth} points`)
    }
}

const p1 = new character ("Ryu", 10, 98); // "Ryu" não será passado pois a expressão name está como private
p1.attack(); // como "attack" já está passando um console.log, não precisa passar de novo fora da estrutura