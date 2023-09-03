/* 
function hello(){
alert("Hello world");
} */

/* let counter = 0;
let highscore

function count(){
    counter +=1;
    highscore += counter;
    document.querySelector('h1').innerHTML = counter;
}
function reset(){
    counter = 0;
    highscore += counter;
    document.querySelector('h1').innerHTML = counter;
}
function decrease(){
    counter-=1;
    highscore += counter;
    document.querySelector('h1').innerHTML = counter;
}
function highscores(highscore){
    if(highscore>=100){
        alert("New score yay!");
        document.getElementById("highscore").textContent = highscore;
    }
    window.addEventListener("load", highscores);
    
} */




let counter = 0;
let highscore = localStorage.getItem("highscore") || 0; 

function count() {
    counter += 1;
    updateDisplay();
}

function reset() {
    counter = 0;
    updateDisplay();
}

function decrease() {
    counter -= 1;
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('h1').innerHTML = counter;
    checkHighscore();
}

function checkHighscore() {
    if (counter >= highscore) {
        highscore = counter;
        if(highscore ==100){
        alert("New high score: " + highscore);}
        document.getElementById("highscore").textContent = highscore;
    }
}

window.addEventListener("load", updateDisplay);
