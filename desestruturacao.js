const notasMatematica = {
    primeiroTrimestre: 6,
    segundoTrimestre: 8,
    terceiroTrimestre: 9
}
// console.log(notasMatematica.terceiroTrimestre)

const {primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = notasMatematica

const mediaDeMatematica = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) /3).toFixed(2)
////////toFixed(2) - arredondar duas casas decimais após o ponto.

if(mediaDeMatematica >= 7){
    console.log('Você foi aprovado!')
} else {
    console.log('Você foi reprovado. -> :(')
}