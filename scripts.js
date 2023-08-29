
const botao = document.querySelector(".clicksorteio")
const nsorteado = document.querySelector("#numerosorteado")

function gerarnumero() {

    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const valor = "⚠️"

    const resultado = Math.floor(Math.random() * (max - min) + min)




    if (min <= max) {

        nsorteado.innerHTML = resultado
    }
    else {

        nsorteado.innerHTML = valor
      alert(valor)
    
    }


}


botao.addEventListener("click", gerarnumero)
