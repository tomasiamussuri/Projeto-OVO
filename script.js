function startTimer() {
    alert('agora estou aqui')

    var tempo = 0
    var fGema = window.document.getElementsByName('preferencia');
    var res = window.document.querySelector('div#res');

    if (fGema[0].checked) {
        var tempo = 4;
        alert('Gema mole selecionada');
        alert(tempo);        

    } else if (fGema[1].checked) {
        var tempo = 8;
        alert(tempo);
     
    } else {
        var tempo = 12;
        alert(tempo);
       
    }

    var display = document.querySelector("#timer") // Elemento para exibir o timer
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