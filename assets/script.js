// Link id's with HTML elements 
var startButtonEl = document.querySelector("#start-button"); 
var timerEl = document.querySelector(".timer-count");
var questionEl = document.querySelector("#question"); 
var displayQuestionEl = document.querySelector(".displayQuestion"); 
var answerLineEl = document.querySelector(".answerLine");
var choiceAEl = document.querySelector("#choiceA"); 
var choiceBEl = document.querySelector("#choiceB"); 
var choiceCEl = document.querySelector("#choiceC"); 
var choiceDEl = document.querySelector("#choiceD"); 
var gameEndEl = document.querySelector("#gameEnd"); 
var scoreEl = document.querySelector("#score"); 
var initialsEl = document.querySelector("#initials");
var submitButtonEl = document.querySelector("#submitButton"); 

// Javascript Elements
var secondsLeft; 
var score= 0; 
var leaderBoard = [];
var timer; 

// Starting the quiz
function startQuiz() { 
    
    secondsLeft = 10;
    startTimer(); 
}
startButtonEl.addEventListener("click", startQuiz);
// ---- Timer Function ----

function startTimer(){ 
    timer = setInterval(function() { 
       if (secondsLeft <=0 ){ 
           clearInterval();
       }else { 
           timerEl.textContent = secondsLeft; 
           secondsLeft--;
       }
   }, 1000)
   
}
