//DECORATORS

function ExibirNome(target: any) {
    console.log(target);
}

// decorators é uma função experimental, para habilitar precisa ir no tsconfig e descomentar "experimentalDecorators"
@ExibirNome 
class funcionario {

}

@ExibirNome // decora um método e da o gatilho para executar uma ação
class Quincas {
    
}

// CLASS DECORATOR
function apiVersion(version:string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    }
}


// ATRIBUTE DECORATOR
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        }); 
    }
}

class Api {
    @minLength(3)
    name: string;

    constructor (name: string) {
        this.name = name;
    }
}
const api = new Api("produtos");
console.log (api.name);