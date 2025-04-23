//declaração de variável com var

// var nome = "Enzo"

/* var nome = "João"*/

//declaração de variável com let

// let nome = "Enzo"

// nome = "João"

// variável declarada com const

// const nome = "Enzin"

// nome = "John Magnus Alexader"

const nome ="Enzo Gabriel" //string

const sobrenome = "Araújo dos Santos"
// console.log(`Meu nome completo é ${nome} ${sobrenome} ${4 + 4}`)

const valor = 21.90 //number

const isLogin = false //boolean

let preco //undefined

const endereco = null //null

const alunos = ["Jõao strombogose", "Maria", "Leon Kennedy"] //array
// console.log(alunos[0]) //pega o valor do índice do array 

const alunoDoSenai = {
    nome:"Enzinho",
    sobrenome:"Gabriel",
    turno:"vespertino e noturno",
    idade:16,
    cursos:["games","programação web"] 
}
// console.log(alunoDoSenai.cursos[1])

const alunosDoSenai = [
    {
        login:"joão",
        email:"joão@gmail.com",
        cursos:["games", "web"]
    },
    {
        login:"maria",
        email:"maria@gmail.com",
        cursos:['design', 'games']
    }
]
//console.log(alunosDoSenai[1].cursos[0])

const users = [
    {
        login:"enzo_ga",
        password:"enzo123",
        cursos:['Técnico em programação de jogos digitais','Técnico em informática para a internet']
    },
    {
        login:"Luciano_rocha",
        password:"Luciano321",
        cursos:["Técnico em saber tudo", "Técnico em programação de saber tudo"]
    }
]

console.log(`Meu login é ${users[0].login}, minha senha é ${users[0].password} e faço os cursos ${users[0].cursos[0]} e ${users[0].cursos[1]}`)


