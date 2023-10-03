// ESRUTURA BÁSICA DE UMA CLASSE

class character {
    name?: string; // ? transforma a expressão como expressão opcional
    stregth: number;
    skill: number;

    constructor (stregth: number, skill: number){
        
        this.stregth = stregth;
        this.skill = skill;
    }

    attack (): void {
        console.log(`Attack with ${this.stregth} points`)
    }
}

const p1 = new character (10, 98);
p1.attack(); // como "attack" já está passando um console.log, não precisa passar de novo fora da estrutura