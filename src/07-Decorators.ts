//DECORATORS

function ExibirNome(target:any) {
    console.log(target);
}

// decorators é uma função experimental, para habilitar precisa ir no tsconfig e descomentar "experimentalDecorators"
@ExibirNome 
class funcionario {

}

@ExibirNome // decora um método e da o gatilho para executar uma ação
class Quincas {
    
}