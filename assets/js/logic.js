
// sets time allocated to complete quiz
var timeAllocated = questions.length * 10;
// initialises time variable for quiz
var time = timeAllocated;
// stores start button reference as variable
var startBtm = document.getElementById("start");
// start button actions
startBtm.addEventListener("click", function () {
    // stores reference to start screen element
    var startScreen = document.getElementById("start-screen");
    console.log("tests event listen on start button");
    // hides start screen
    startScreen.classList.add("hide");
    // checks if questions data is loaded
    console.log(questions);
    // references questions and feedback element on webpage
    var questionsElement = document.getElementById("questions");
    var feedbackElement = document.getElementById("feedback");
    // show questions and feedback html element
    questionsElement.classList.remove("hide");
    feedbackElement.classList.remove("hide");
    // sets timer variable to time one second intervals
    var timer = setInterval(function () {
        // gets reference to time numerical value specific span on webpage
        var timerElement = document.getElementById("time");
        // updates timee element
        timerElement.innerHTML = time - 1;
        // }
        // updates time
        time--;
        console.log(`time: ${time}`)
        // stop timer when time has run out
        if (time <= 0) {
            clearTimeout(timer);
            // hide questions
            questionsElement.classList.add("hide");
            // end screen reference
            var endScreenElement = document.getElementById("end-screen");
            // show end screen
            endScreenElement.classList.remove("hide");
        }
    }, 1000);
    asksQuestion();
});

    // initialises questionsIndex
    var questionsIndex = 0;

function asksQuestion() {
    // references to question title and feedback element
    var feedbackElement = document.getElementById("feedback");
    var questionTitleElement = document.getElementById("question-title");
    var choicesElement = document.getElementById("choices");
    // loops through questions and appends question and choices to screen
    var questionObj = questions[questionsIndex];
    questionTitleElement.innerHTML = questionObj.question;
    generateChoices(questionObj);
    // listens for user click on choice button within choices div
    choicesElement, addEventListener("click", function (event) {
        event.stopPropagation();
        console.log(event);
        var buttonClicked = (event.target.tagName.toLowerCase() === "button") &&
            event.path[1].className === "choices";
        var choiceIsCorrect = event.target.value === questionObj.answer;
        if (buttonClicked && choiceIsCorrect) {
            console.log("button - choice is correct");
            choicesElement.innerHTML = ``;
            questionsIndex++;
            asksQuestion();
            // changeQuestion(questionsIndex);
        } else if (buttonClicked && !choiceIsCorrect) {
            console.log("button - choice is wrong");
            choicesElement.innerHTML = ``;
            time -= 10;
            questionsIndex++;
            asksQuestion()
            // changeQuestion(questionsIndex);
        }
    })
}

function generateChoices(questionObj) {
    // references choices div
    var choicesElement = document.getElementById("choices");
    for (var choice of questionObj.choices) {
        // create input button in choices Element
        var inputBtn = document.createElement("button");
        var choiceBtn = choicesElement.appendChild(inputBtn);
        choiceBtn.setAttribute("value", choice);
        choiceBtn.innerText = choice;
    }
}

// function changeQuestion(questionsIndex) {

// }

function checksChoice(event) {

}