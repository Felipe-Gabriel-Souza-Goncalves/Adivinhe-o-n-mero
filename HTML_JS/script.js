const divInicio = document.getElementById("divInicio")
const containerMenor = document.getElementById("containerMenor")
const inputPalpite = document.getElementById("palpite")
const texto = document.getElementById("texto")
const tentativa = document.getElementById("tentativa")
const listaDeTentativas = document.getElementById("listaDeTentativas")

var numero;
var tentativas = 0;
var dificuldade = 10
var arrayPalpites = []

console.log("%c Por que você está aqui? pretende trapacear? >=[",
             "color :pink;")
function iniciarJogo(dificuldade){
    switch(dificuldade){
        case 1:
            dificuldade = 10
            inputPalpite.max = dificuldade
            document.getElementById("spanDificuldade").innerHTML = "Fácil"
            break;
        case 2:
            dificuldade = 100
            inputPalpite.max = dificuldade
            document.getElementById("spanDificuldade").innerHTML = "Médio"
            break;
        case 3:
            dificuldade = 1000
            inputPalpite.max = dificuldade
            document.getElementById("spanDificuldade").innerHTML = "Difícil"
            break;
    }
    numero = Math.ceil(Math.random()*dificuldade)


    divInicio.style.display = "none"
    containerMenor.style.display = "block"
}

function darPalpite(){
    palpite = parseInt(inputPalpite.value)
    
    if(palpite != numero){
        texto.style.animation = "erroPalpite 2s ease-in-out";
        texto.style.animation = "";
        inputPalpite.style.color = "red"

        if(palpite > numero){
            texto.innerHTML = "O seu palpite é maior que o número!"
            var element = document.createElement("li")
            element.innerHTML = "Tentativa " +tentativas + " - "  + palpite
            listaDeTentativas.appendChild(element)

        } else if(palpite < numero){
            texto.innerHTML = "O seu palpite é menor que o número"
            var element = document.createElement("li")
            element.innerHTML = "Tentativa " +tentativas + " - "  + palpite
            listaDeTentativas.appendChild(element)
        }




    }else if(palpite == numero){
        texto.innerHTML = "Parabéns, você acertou!"
        inputPalpite.style.color = "rgb(0,200,0)"
        console.log(arrayPalpites)
        return 0;
    }
    tentativas++
    tentativa.textContent= "Tentativa " + tentativas
}
function reiniciar(){
    divInicio.style.display = "block"
    containerMenor.style.display = "none"
    texto.innerHTML = ""
    tentativas = 0
    tentativa.textContent= "Tentativa " + tentativas
    inputPalpite.value = ""

}

inputPalpite.addEventListener("focus", () =>{
    inputPalpite.style.color = "black"
})