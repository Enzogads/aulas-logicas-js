// function saudacao(){
//     console.log('Opa, bom dia!')
// }

//arrow function com parâmetros

// const saudacao = (turno,nome=Jõao)=>{
//     console.log(`${turno} ${nome}` )
// }

// saudacao("Bom dia","Luciano")
// saudacao('Boa noite')

// const soma = (x,y)=>{
//     return x+y
// }

const adicao = (x,y,)=> x+y
const subtracao = (x,y,)=> x-y
const multiplicacao = (x,y,)=> x*y
const divisao = (x,y,)=> x/y

// const resultadoDaConta = subtracao(5,8)

// console.log(resultadoDaConta)

//função retornando o cálculo de duas funções

// const calculo = (x,y,z,a)=>{
//     return adicao(x,y) + multiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)
// console.log("Resultado do cálculo -> ",resultadoDoCalculo)



//retornar o valor de várias funções em um return dentro de um objeto

// const calculo = (x,y)=>{
//     return {
//         adicao: adicao(x,y),
//         subtracao: subtracao(x,y),
//         multiplicacao: multiplicacao(x,y),
//         divisao: divisao(x,y)
//     }
// }

// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("resultado final - > ", resultadoFinalDoCalculo)


//escopo global e local (de bloco ou funçõa)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log("escopoGlobal",escopoGlobal)
}

console.log(escopoLocal)
