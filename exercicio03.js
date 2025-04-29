//crie uma função que recebe um parâmetro de nota e verifica em um condicional se a nota for maior que 7, o aluno está aprovado, se não, o aluno está reprovado


function resultadoFinal(nota){
    if(nota>=7){
        return "Você foi aprovado!"
    }
    else{
        return "Você foi reprovado!"
    }
}

const verificaNota = resultadoFinal(6.5)

console.log(verificaNota)

