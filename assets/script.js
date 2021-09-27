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
var instructionsEl= document.querySelector(".instructions");


// Javascript Elements
var secondsLeft; //Will change based on answers later
var score= 0; 
var leaderBoard = [];
var timer; 

//Array for holding all questions

var questionsPool = [
    {
        question: "Question 1", 
        multipleChoice: [], 
        answer: ""
    },
    {
        question: "Question 2", 
        multipleChoice: [], 
        answer: ""
    },
    {
        question: "Question 3", 
        multipleChoice: [], 
        answer: ""
    },
    {
        question: "Question 4", 
        multipleChoice: [], 
        answer: ""
    },
    {
        question: "Question 5", 
        multipleChoice: [], 
        answer: ""
    }
];

// Starting the quiz
function startQuiz() { 
    
    secondsLeft = 10; //will change later
    startTimer(); 
    //instructionsEl.setAttribute("class", "hide"); //reference to hiding instructions 
}
startButtonEl.addEventListener("click", startQuiz);

// ---- Timer Function ----

function startTimer(){ 
    timer = setInterval(function() { 
       if (secondsLeft <=0 ){ 
           clearInterval(timer);
       }else { 
           timerEl.textContent = secondsLeft; 
           secondsLeft--;
       }
   }, 1000)
   
}

// ---- Getting a question from the pool ----
function quesPool () { 

}

// ---- Ending the game ----
function endGame() { 
    
}