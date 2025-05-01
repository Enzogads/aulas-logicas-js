// crie um array de objetos em que cada objeto é um produto, tendo como chave (nome, preco, descricao). Crie pelo menos 3 produtos.

//Crie uma variável que irá armazenar o array com os nomes dos produtos

//Crie uma segunda variável que irá armazenar o array com os preços dos produtos

//Use o laço for ou for of para exibir cada item do array da variável de nomes no console 

const produtos = [
    {
        nome: "Crachá do Luciano",
        preco: 90,
        descricao: "Tem como entrar nos lugares restritos do senai com ele."
    },
    {
        nome: "Óculos do Luciano",
        preco: 999,
        descricao: "Ganha visão e conhecimento em programação."
    },
    {
        nome: "Casaco do Luciano",
        preco: 1,
        descricao: "Esquenta tanto que é capaz de você derreter e sucumbir no calor em menos de 10 segundos."
    }

]

const nomeObjeto = produtos.map(objeto => objeto.nome)
const precoObjeto = produtos.map(objeto => objeto.preco)

for(nome of nomeObjeto){
    console.log(nome)
}