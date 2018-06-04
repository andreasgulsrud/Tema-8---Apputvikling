
/*
    Temaoppgave 8 - Apputvikling
    Vår 2018
    Author: Andreas Gulsrud // 984112
*/


// Declare variables
var runnyButton = document.querySelector('.runny');
var softButton = document.querySelector('.soft');
var firmButton = document.querySelector('.firm');
var hardButton = document.querySelector('.hard');


var resetButton = document.querySelector('.resetbtn');
var startButton = document.querySelector('.boilbtn');

var duration = {};
var eggMin = 0;

duration.min = eggMin;
duration.sec = 0;

var timeTextObject = document.querySelector('.timer');
var body = document.body;
var originalText = timeTextObject.textContent;

console.log(originalText);

startButton.addEventListener('click', knappetrykkFunksjon);

var intervalObj;

// Runny btn
runnyButton.addEventListener('click', runnyClick);
function runnyClick(event){
    console.log('runny');
    duration.min = 2;
    duration.sec = 30;
    timeTextObject.textContent = '0'+duration.min +':'+ duration.sec;
}

// Soft btn
softButton.addEventListener('click', softClick);
function softClick(event){
    console.log('soft');
    duration.min = 4;
    duration.sec = 30;
    timeTextObject.textContent = '0'+duration.min +':'+ duration.sec;
}

// Firm btn
firmButton.addEventListener('click', firmClick);
function firmClick(event){
    console.log('firm');
    duration.min = 8;
    duration.sec = 0;
    timeTextObject.textContent = '0'+duration.min +':'+ duration.sec + duration.sec;
}

// Hard btn
hardButton.addEventListener('click', hardClick);
function hardClick(event){
    console.log('hard');
    duration.min = 11;
    duration.sec = 30;
    timeTextObject.textContent = duration.min +':'+ duration.sec;
}

// Start / Reset btn
resetButton.addEventListener('click', resetClick);
function resetClick(event){
    console.log('reset');
    clearInterval(intervalObj);
    timeTextObject.innerHTML = originalText;
}


// Timer
function knappetrykkFunksjon(event){
    //start interval timer
    intervalObj = setInterval(handleInterval, 1000);

    function handleInterval(){
        if(duration.min == 0 && duration.sec == 0){

            clearInterval(intervalObj);
            playAlarm("Nedtelling ferdig");
        } else {
            countDown();
            showDuration();
        }
    }
}

// Count down function
function countDown(){
    duration.sec = duration.sec - 1;

    if(duration.sec < 0){
        duration.min = duration.min -1;
        duration.sec = 59;
    }
    console.log(duration);
}

// Show duration
function showDuration(){

    var min = duration.min;
    var sec = duration.sec;

    if(min < 10) {
        min = '0' + min;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }

    timeTextObject.textContent = min +':'+ sec;
}