// Code QuizMaster Javascript code

// Get references to the #start button element
var startBtn = document.querySelector("#start");

// establish variables for use in running necessary questions
var quizSectionEl = document.querySelector(".question-container"); 
var quizQuestionsEl = document.querySelector("#quiz-questions"); 
var optionSelectEl = document.querySelector("#the-options"); 
var highScoreDisplayEl = document.querySelector("#high-scores");
var enterScorerInit = ""; 
var quesNum = 0; //start run through of questions at first item in array 
var quizTime = 60; // initiate clock at 60 seconds 
var finalScore = ""; // score is empty at first run through

// create array from querySelector element to store questions and answers with inner array for quiz choices 
var quizQuestionsEl = [
{
  question: "Commonly used data types do NOT include:",
  choices: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctChoice: "Alerts"
},
{
  question: "The condition in an if/else statement is enclosed in:",
  choices: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
  correctChoice: "Parenthesis"
},
{
  question: "Arrays in JavaScript can be used to store:",
  choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
  correctChoice: "All of the above"
},
{
  question: "String values must be enclosed within ______ when being assigned to variables",
  choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
  correctChoice: "Quotes"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
  correctChoice: "console.log"
}
]

// start the process when "start quiz" button pressed 
startBtn.addEventListener("click", startQuiz);

// start quiz will call timer function to begin countdown 
function quizTimer() { 
  // section is not visible until start button clicked
  quizQuestionsSetEl.style.display = "none"; 
  // call first question, position 0 in array, to start quiz
  quizRunThrough(0); 
  // start timer
  var quizTimeDisplay = setInterval(function() { 
     // user answers questions until finished or time runs out
    If (quizTime <= 0 || quesNum === quizQuestions.length); { 
       // user is out of time or finished the quiz, 
      clearInterval(quizTimeDisplay); 
      document.getElementById("timer").textContent = "The quiz has ended. Thank you for playing.";
      // go to scorer Initial Input field
        inputScore(); 
    //} else { getting error expecting statement but not sure why
      document.getElementById("timer").textContent = quizTime;
      quizTime--;
    } 
    // decrease time by 1 second
   
    }, 1000);
};
 
// quiz question process 
function quizRunThrough(quesNum) {
  // if there is still time left from the last user but all questions have been asked, reset to empty to start again
  if (quizTime > 0 && quizQuestions.length > 4) {
    document.querySelector("#the-questions").textContent = quizQuestions[i].question; 
    optionSelectEl.innerHTML = ""; 
  // create buttons for answer options for each question in sequence
  for(var i = 0; i < quizQuestions.length; i++ ) {
    var option = document.createElement("button");
    option.setAttribute("class", "option-btn"); 
    option.setAttribute("value", quizQuestions[quesNum].choices[i]);
    option.textContent = quizQuestions[quesNum].choices[i];
    option.onclick = checkResult;
    answerOptionEl.appendChild(option);
    };
  } else { 
      inputScore();
}
// check if user answered correctly
function checkResult() {
 //if user answers question incorrectly, display "wrong" and dock 10 seconds from time, otherwise proceed to next question 
  if(answerOptionEl != correctChoice) {
    alert("Sorry, wrong answer! You lose 10 seconds from time remaining.");
    quizTime = quizTime - 10;
  } else {
    alert("Correct!");
    //index increased by one after last for loop; check if max reached, if not, next set of questions, otherwise proceed to All Done page to check score and enter initials
    if (quesNum <= quizQuestions.length) {
      quizRunThrough(quesNum);
    } else {
      inputScore();
    }
  }
}
quizTimer();

// Proceed to All Done page to check score and enter initials
// if time = 0 before user has finished answering all questions, highScore value = 0.  display "try again next time"
function inputScore() {
// if time > 0 and user has answered all questions, display final score based on quiz-time 
  yourScore = quizTime;
  optionSelectEl.style.display = none;
  //reset question index to empty
  quizQuestionsEl.innerHTML = "";
  //reveal All Done div to display input field and score
  enterScorerInitEl.style.display = "inherit";
  document.getElementbyId("yourScore").textContent = score;  }

// User inputs initials after finishing quiz and initials are stored with highScoreTime in local storage
// need to ensure user enters 2 initials only

var highScorer = document.querySelector("input[name='high-scorer']").value;
//save score and initials to local storage
  var addScore = document.querySelector("#add-score");
  localStorage.setItem("addScore", score);
  localStorage.setItem(("highScorer", JSON.stringify(highScorer)));

};
  function displayHighScorer() {
    var highestScorer = localStorage.getItem('high-scorer')
    var highScore = localStorage.getItem('score', JSON.stringify(score));
    highScoreDisplayEl.querySelector("#view-score-btn").textContent = "high score = " + highScore + " achieved by " + highestScorer; 
  
  };

// set event listeners for click of either Go Back or Clear High Scores button on High Scores page
var goBackButton = document.querySelector("#go-back");

var clearHighScores = document.querySelector("#clear-scores");

var ViewScoreBtn = document.querySelector("#view-score-btn");

var highScoreDisplayEl = function (event) {
  var targetEl = event.target;
  // if Go Back button is pressed, return to the previous screen
  if(targetEl.matches("#go-back")) {
    <a href="/"></a>
  } else { // clear scores button clicked 
    document.querySelector("input[name='high-scorer']").value = "";

}
//Score & Initials stored in Local storage. display top 3 scores - need function to update that
};

startQuiz();

  
// for back button
goBackButton.addEventListener("click", goback );

// Attach event listener to restore timer to 60 once start quiz button is clicked
clearHighScores.addEventListener("click", clearscores);

// for high score button
viewScoreBtn.addEventListener("click", displayHighScorer);






