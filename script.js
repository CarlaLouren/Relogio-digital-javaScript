const timer = document.querySelector("#timer");
const botao = document.querySelector("#start-stop");
let horas = 0,
  minutos = 0,
  segundos = 0,
  intervalo;
botao.addEventListener("click", verificarBotao);
function verificarBotao() {
  if (botao.innerHTML === "Iniciar") {
   botao.innerHTML = "Pausar";
    intervalo = setInterval(updateTimer, 1000);
  } else {
    botao.innerHTML = "Iniciar";
    clearInterval(intervalo);
  }
}

function updateTimer() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  timer.innerHTML=`${horas}: ${minutos} : ${segundos}`
}
