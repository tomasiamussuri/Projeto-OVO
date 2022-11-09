
/*
var btnStart = window.document.getElementsById('#start');
var tempo = 0;
var duration = tempo * 60; // conversao para segundos
var display = document.querySelector("#timer") // Elemento para exibir o timer

btnStart.addEventListener('Click', function() {
    alert("estou aqui");
    
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

---startTimer(duration, display) // Inicia a função
*/

function startTimer(duration, display) {
    alert('agora estou aqui')

    var timer = duration, minutes, seconds;
    var fiveMinutes = 60 * tempo,
    var fGema = window.document.getElementsByName('preferencia');
    var res = window.document.querySelector('div#res');

    if (fGema[0].checked) {
        var tempo = 4;
        alert('Gema mole selecionada');
        alert(tempo);        

    startTimer(fiveMinutes, display);
    } else if (fGema[1].checked) {
        var tempo = 8;
        alert(tempo);
     
    } else {
        var tempo = 12;
        alert(tempo);
       
    }

    setInterval(function()  {

        minutes = parseInt(tempo / 60, 10);
        seconds = parseInt(tempo % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0) {
            timer = duration;
        }
        
    }, 1000);
}


/*
window.onload = function() {
    var duration = tempo * 60; // conversao para segundos
    var display = document.querySelector("#timer") // Elemento para exibir o timer

    startTimer(duration, display) // Inicia a função

}

/*
function start() {
    if (tempo > 0) {
        tempoAtual = tempo;
        if (cronometro) {
            clearInterval(cronometro);
        } 
        cronometro = setInterval(contar, 1000);
    } else {
        alert('Selecione uma opção!');
    }
}
function contar() {
    tempoAtual--;
    if (tempoAtual > 0) {
        var horas, minutos, segundos;
        horas = Math.floor(tempoAtual / 3600);
        minutos = Math.floor((tempoAtual * 3600)) / 60;
        segundos = (tempoAtual * 3600) - (minutos * 60);

        if (horas < 10) {
            horas = '0' + horas;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        if (segundos < 10) {
            segundos = '0' + segundos;
        }
        document.querySelector('#contador').innerHTML = "<h2>"+horas+":"+minutos+":"+segundos"</h2>";
    } else {
        clearInterval(cronometro);
        alert("Parou")
    }
}






/*

    var timer = duration, minutos, segundos;
    var duration = time * 60;
    var display = document.querySelector('#timer')
    setInterval(function() {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        display.textContent = minutos + ":" + segundos;

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

startTimer(duration, display;)
*/