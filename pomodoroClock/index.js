var audio = document.getElementsByTagName("audio")[0]; 
    
var countTime = 25;
var shortBreak = 5;
var longBreak = 10;
    //use this to see if we can change times on pause
var pause = false;
var seconds = 0;
var minutes = 25;
    //global interval variable
var counting;

var title = document.getElementById("title");
var timer = document.getElementById("timer");

timer.innerHTML = (minutes + ":00");

var startPomodoro = document.getElementById("pomodoro");
startPomodoro.addEventListener("click", handlePomodoro);

var shBreak = document.getElementById("shortBreak");
var lnBreak = document.getElementById("longBreak");
shBreak.addEventListener("click", handleBreak);
lnBreak.addEventListener("click", handleBreak);

var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
stop.addEventListener("click", function(){
    if(pause === false){
        counting = setInterval(countdown, 1000);
        pause = true;
    }else{
        clearInterval(counting);
        pause = false;
    }
})
reset.addEventListener("click", function(){
    minutes = 25;
    seconds = 0;
    timer.innerHTML = (minutes + ":0" + seconds);
    title.innerHTML = (minutes + ":0" + seconds + " Tomato Timer");
    clearInterval(counting);
    pause = false;
});

function handleBreak(e){
    if(e.currentTarget === shBreak){
        minutes = 5;
        seconds = 0;
        if(pause === false){
            counting = setInterval(countdown, 1000);
            pause = true;
        }
    }else if(e.currentTarget === lnBreak){
        minutes = 10;
        seconds = 0;
        if(pause === false){
            counting = setInterval(countdown, 1000);
            pause = true;
        }
    }
}
function handlePomodoro(e){
    minutes = 25;
    seconds = 0;
    timer.innerHTML = (minutes + ":0" + seconds);
    title.innerHTML = (minutes + ":0" + seconds + " Tomato Timer");
    clearInterval(counting);
    pause = false;
}

function countdown(){

    if(minutes === 0 && seconds === 1){
        //play the sound on both
        audio.play();
    }
    

    if(minutes === 0 && seconds === 0){

        timer.innerHTML = (minutes + ":0" + seconds);
        title.innerHTML = (minutes + ":0" + seconds + " Tomato Timer");
        pause = true;
    }
    else{
        if(seconds === 0){
            seconds = 60; 
            minutes--;
        }
        seconds--;
        if(seconds < 10){
            timer.innerHTML = (minutes + ":0" + seconds);
            title.innerHTML = (minutes + ":0" + seconds + " Tomato Timer");
        }
        else{
            timer.innerHTML = (minutes + ":" + seconds);
            title.innerHTML = (minutes + ":" + seconds + " Tomato Timer");
        }
    }
}
    
    
var start = document.getElementById("start")
start.addEventListener("click", function(){
    //begin countdown function, call it every sec
    minutes = 25;
    seconds = 0;
    timer.innerHTML = (minutes + ":0" + seconds);
    title.innerHTML = (minutes + ":0" + seconds + " Tomato Timer");
    if(pause === false){
        counting = setInterval(countdown, 1000);
        pause = true;
    }
});
