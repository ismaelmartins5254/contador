var cont = 0
var tela = document.getElementById('tela')


function mais() {
    cont++
    tela.innerHTML = cont
}
function menos() {
    cont--
    tela.innerHTML = cont
}

function limpar() {
   cont = 0
   tela.innerHTML = cont
}