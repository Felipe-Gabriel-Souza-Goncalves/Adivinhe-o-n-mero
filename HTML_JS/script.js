const divInicio = document.getElementById("divInicio")
const containerMenor = document.getElementById("containerMenor")
const inputPalpite = document.getElementById("palpite")
const texto = document.getElementById("texto")
const elementoTentativa = document.getElementById("tentativa")
const ol = document.getElementById("listaDeTentativas")
const li = document.getElementsByClassName("li")

var numero;
var tentativas = 1;
var dificuldade = 10
var arrayPalpites = []
var ultimoPalpite;

console.log("%c Por que você está aqui? pretende trapacear? >=[",
             "color :pink;")
function iniciarJogo(dificuldade){
    for(var i = li.length-1; i>=0; i--){
        li[i].remove()
    }
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
    document.getElementById("enviarPalpite").style.display = "block"
}
function darPalpite(){
    var palpite = inputPalpite.value
    if(palpite == "" || palpite == ultimoPalpite){
        return
    }
    palpite = parseInt(palpite)
    ultimoPalpite = palpite;

    var element = document.createElement("li")
    element.classList.add("li")
    element.innerHTML = "Tentativa " +tentativas + " - "  + palpite
    ol.appendChild(element)

    if(palpite != numero){
        texto.style.animation = "erroPalpite 2s ease-in-out";
        texto.style.animation = "";
        inputPalpite.style.color = "red"

        if(palpite > numero){
            texto.innerHTML = "O seu palpite é maior que o número!"
        } else if(palpite < numero){
            texto.innerHTML = "O seu palpite é menor que o número"
        }




    }else if(palpite == numero){
        texto.innerHTML = "Parabéns, você acertou!"
        inputPalpite.style.color = "rgb(0,200,0)"
        elementoTentativa.textContent= "Tentativa " + tentativas
        document.getElementById("enviarPalpite").style.display = "none"
        document.getElementsByClassName("li")[document.getElementsByClassName("li").length - 1].style.color = "rgb(20, 200, 20)"
        return 0;
    }
    elementoTentativa.textContent= "Tentativa " + tentativas
    tentativas++
}
function reiniciar(){
    for(var i = li.length-1; i>=0; i--){
        li[i].remove()
    }
    divInicio.style.display = "block"
    containerMenor.style.display = "none"
    texto.innerHTML = ""
    tentativas = 1
    elementoTentativa.textContent= "Tentativa " + tentativas
    inputPalpite.value = ""

}

inputPalpite.addEventListener("focus", () =>{
    inputPalpite.style.color = "black"
})