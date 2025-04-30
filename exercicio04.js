// Crie um programa que verifique o faturamento médio dos três trimestres de 2024, sendo

// 1 trimestre => 10.650

// 2 trimestre => 20.000

// 3 trimestre => 35.000

// se for maior que 25.000, o fatramneto médio é esperado. Mas, se o faturamneto for de 25.000, o faturamento médio está abaixo do esperado

// utilize im objeto para registrar os detalhes. Utilize Desestruturaçõa para facilitar o acesso aos elementos, e fazer os cálculos. Por fim, use um condicional

const faturamento = {
    primeiroTrimestre: 10650,
    segundoTrimestre: 20000,
    terceiroTrimestre: 35000
}

const {primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = faturamento
 const media = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) /3).toFixed(2)

if (media >= 25000){
    console.log('Faturamento médio correspondente às expectativas.')
} else{
    console.log('futuramento médio não correspondente às expectativas.')
}