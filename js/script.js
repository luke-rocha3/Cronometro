function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT"
    });
}
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function iniciarRelogio() { // Inicia um temporizador que executa uma função a cada 1 segundo
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);// Função que será executada a cada 1 segundo
}

iniciar.addEventListener("click", function (event) {
    relogio.classList.remove("pausado", "verde");
    clearInterval(timer);
    iniciarRelogio();
});
pausar.addEventListener("click", function (event) {
    relogio.classList.add("pausado");
    clearInterval(timer);
});
zerar.addEventListener("click", function (event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
    relogio.classList.add("verde");
});

