//crie uma função que receba um array chamado - "desmembraArray", que execute um laço for (for ou for of) e exiba todos os itens um abaixo do outro

desmembraArray = ["manoel", "carlos alexander strombogose", "jorge padilha aveiro dos santos"]
function exibe(x){
    for(nome of x){
        console.log(nome)
    }
}

exibe(desmembraArray)