var scoresLinkEl = document.querySelector("#view-scores");
var timeDisplayEl = document.querySelector("#timer");
var homePageEl = document.querySelector(".start-container");
var quizSectionEl = document.querySelector("#quiz-questions");
var yourScoreEl = document.querySelector("#all-done");
var scoreDisplayEl = document.querySelector(".score-output");

var loadQuizQuestions = function() {
    const quizQuestions = [
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
        ];
            
    // if still time on timer and still questions left
    var currentQuestionContainerEl = document.querySelector("#the-question");
    var questionEl = document.createElement("h4");
    var choicesDisplayEl = document.querySelector("#the-choices");
    var choicesButtonEl = document.createElement("button");
    choicesButtonEl.classList = "choices-btn";
    choicesButtonEl.type = "submit";
    var correctChoiceEl = document.createElement("p");
    commentEl = document.createElement("h4");
    var selected = '';

   // run through each set of questions 
   for (var i = 0; i < quizQuestions.length; i++) {
    questionEl.innerHTML = quizQuestions[i].question;
    currentQuestionContainerEl.appendChild(questionEl);
        for (var j = 0; j < quizQuestions[i].choices.length; i++) {
            choicesButtonEl.innerHTML = choices[j];
                choicesDisplayEl.appendChild(choicesButtonEl);
                currentQuestionContainerEl.appendChild(choicesDisplayEl);    
        };
        correctButtonEl.innerHTML = quizQuestions[i].correctChoice;
        currentQuestionContainerEl.appendChild(correctButtonEl);
       
        // check if choice selected is correct
        choicesButtonEl.addEventListener("click", function() {
        selected = choicesButtonEl.value;
        if (selected.value === correctChoiceEl.value) {
            commentEl.innerHTML="Correct"
        } else {
            commentEl.innerHTML="Wrong answer";
        }   currentQuestionContainerEl.appendChild(commentEl);  
        }); 
    quizSectionEl.appendChild(currentQuestionContainerEl); 
    }
};