let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")
const btnReduzir = document.querySelector("#btnReduzir")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})

btnReduzir.addEventListener("click", ()=>{
    if(contador > 0)
    contador--
    resultado.textContent = `Contador: ${contador}`
})