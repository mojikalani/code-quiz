// Link id's with HTML elements 

var timerEl = document.querySelector(".timer");
var startButtonEl = document.querySelector("#start-button"); 
var answerBtnEl = document.querySelector(".btn");
var choiceAEl = document.querySelector("#choiceA"); 
var choiceBEl = document.querySelector("#choiceB"); 
var choiceCEl = document.querySelector("#choiceC"); 
var choiceDEl = document.querySelector("#choiceD"); 
var gameEndEl = document.querySelector("#gameEnd"); 
var scoreEl = document.querySelector("#score"); 
var initialsEl = document.querySelector("#initials");
var answerLineEl = document.querySelector(".answerLine");
var submitButtonEl = document.querySelector("#submitButton"); 
var instructionsEl= document.querySelector(".instructions");
var displayQuestionEl = document.querySelector("#displayQuestion");
var questionEl = document.querySelector("#question"); 
var answerChoice = document.querySelector("#correct_wrong");
var hsPageEl = document.querySelector("#hsPage");
// Javascript Elements
var secondsLeft = 75; //Will change based on answers later
var score= 0; 
var leaderBoard = [];
var timer; 
var questionCount = 0;
var questionsIdx = 0;
//Array for holding all questions

var questionsPool = [
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];


// Starting the quiz
function startQuiz() { 

    questionCount = 0;
    document.getElementById("instructions").style.display = "none";
    document.getElementById("question").style.display = "block";
    startTimer(); 
    setQuestion(questionCount);
   
}



// ---- Timer Function ----

function startTimer(){ 
        
        timer = setInterval(function() { 
        timerEl.textContent = secondsLeft; 
        secondsLeft--;
        
        if (secondsLeft <=0 || questionCount === questionsPool.length){ 
           clearInterval(timer);
           
       }else { 
           
       }
   }, 1000)
   
}

// ---- Getting a question from the pool ---
function setQuestion() {
    
    displayQuestionEl.textContent = questionsPool[questionCount].question;
    choiceAEl.textContent = questionsPool[questionCount].answers[0];
    choiceBEl.textContent = questionsPool[questionCount].answers[1]; 
    choiceCEl.textContent = questionsPool[questionCount].answers[2]; 
    choiceDEl.textContent = questionsPool[questionCount].answers[3];

 }
        
        // ---- Function to compare answers ----

function checkAnswer() { 
  
    
 
    setQuestion(checkAnswer);
}
    
    
    // ---- Ending the game ----
    function endGame() { 
    
}

startButtonEl.addEventListener("click", startQuiz);

questionEl.addEventListener("click", function(event) { 
    if (event.target.matches(".ansBtn")) { 
        console.log("TODO: Show next question")
        questionCount = questionCount + 1;
        checkAnswer();
        console.log(questionCount);
    }

});

hsPageEl.addEventListener("click", function() { 
    if (hsPageEl.style.display ==="none") { 
        hsPageEl.style.display ==="block"
    }else { 
        return alert("No High Scores.");
    }
})