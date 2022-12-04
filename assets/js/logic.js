
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
    // references questions on webpage
    var questionsElement = document.getElementById("questions");
    // show questions html element
    questionsElement.classList.remove("hide");
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
            timerElement.innerHTML = 0;
            // outputs appropriate final score to end screen
            var finalScoreElement = document.getElementById("final-score");
            if (choiceIsSelected) {
                finalScoreElement.innerText = score;
            } else {
                finalScoreElement.innerText = 0;
            }
        }
    }, 1000);
    asksQuestion();
});

// initialises questionsIndex
var questionsIndex = 0;
// initialises score
var score = 0;
// checks if user selected an option during quiz
var choiceIsSelected = false;

// event listener
var choicesElement = document.getElementById("choices");
choicesElement, addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(event);
    var questionObj = questions[questionsIndex];
    console.log(questionObj.answer);
    var buttonClicked = (event.target.tagName.toLowerCase() === "button") &&
        event.path[1].className === "choices";
    var choiceIsCorrect = event.target.value === questionObj.answer;
    var isLastQuestion = questionsIndex === questions.length - 1;
    if (isLastQuestion && buttonClicked && choiceIsCorrect) {
        choiceIsSelected = true;
        console.log("button - choice is correct + last question");
        choicesElement.innerHTML = ``;
        score = time;
        console.log(`score is ${score}`);
        givesFeedback(choiceIsCorrect)
        time = 0;
    } else if (isLastQuestion && buttonClicked && !choiceIsCorrect) {
        choiceIsSelected = true;
        console.log("button - choice is correct + last question");
        choicesElement.innerHTML = ``;
        time -= 10;
        score = time;
        console.log(`score is ${score}`);
        givesFeedback(choiceIsCorrect)
        time = 0;
    } else if (buttonClicked && choiceIsCorrect) {
        choiceIsSelected = true;
        console.log("button - choice is correct");
        choicesElement.innerHTML = ``;
        score = time;
        console.log(`score is ${score}`);
        givesFeedback(choiceIsCorrect)
        questionsIndex++;
        asksQuestion();
    } else if (buttonClicked && !choiceIsCorrect) {
        choiceIsSelected = true;
        console.log("button - choice is wrong");
        time -= 10;
        choicesElement.innerHTML = ``;
        score = time;
        console.log(`score is ${score}`);
        givesFeedback(choiceIsCorrect)
        questionsIndex++;
        asksQuestion();
    } else {
        score = 0;
        console.log(`score is ${score}`);
    }
});

function asksQuestion() {
    // references to question title element
    var questionTitleElement = document.getElementById("question-title");
    // loops through questions and appends question and choices to screen
    var questionObj = questions[questionsIndex];
    questionTitleElement.innerHTML = questionObj.question;
    generateChoices(questionObj);
    choiceIsSelected = false;
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

function givesFeedback(choiceIsCorrect) {
    // references feedback HTML element
    var feedbackElement = document.getElementById("feedback");
    if (choiceIsCorrect) {
        feedbackElement.innerText = "Correct!";
    } else {
        feedbackElement.innerText = "Wrong!";
    }
    feedbackElement.classList.remove("hide");
    setTimeout(function () {
        feedbackElement.classList.add("hide");
    }, 4000);
}