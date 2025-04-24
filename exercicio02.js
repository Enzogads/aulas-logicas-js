// const produto01 = {
//     nome: 'Garrafa top',
//     preco: 5.00,
//     quantidade: 3
// }

// const produto02 = {
//     nome: 'abridor',
//     preco: 5.00,
//     quantidade: 2
// }

// console.log(`"O resultado do cálculo final é: ${(produto01.preco * produto01.quantidade) + (produto02.preco * produto02.quantidade)}`)

const produto01 = {
    nome: "garrafa top",
    preco: 5.00,
    quantidade: 3
}

const produto02 = {
    nome: 'abridor',
    preco: 5.00,
    quantidade: 2
}

const calculo = produto01.preco * produto01.quantidade + produto02.preco * produto02.quantidade

console.log(`"Você comprou: ${produto01.quantidade} ${produto01.nome} e ${produto02.quantidade} ${produto02.nome} O resultado do cálculo final é: ${calculo}`)