var seconds = 00;
var tens = 00;

var appendSeconds = document.getElementById('seconds')
var appendTens = document.getElementById('tens')
let buttonStart = document.getElementById('button-start')
let buttonStop = document.getElementById('button-stop')
let buttonReset = document.getElementById('button-reset')

var interval;

function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
}

function stopTimer(){
    tens = 00;
    seconds = 00;
}


buttonStart.onclick = function(){
    interval = setInterval(startTimer)
}

buttonStop.onclick = function(){
    clearInterval(interval)
}

buttonReset.onclick = function(){
    clearInterval(interval)
    tens = '00';
    seconds = '00';
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}

