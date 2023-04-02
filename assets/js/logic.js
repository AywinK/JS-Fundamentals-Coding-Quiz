// ------------------------------ GLOBAL VARIABLES ------------------------------
// sets time allocated to complete quiz
var timeAllocated = questions.length * 10;
// gets timer element on start screen reference
var timerOnStartElement = document.getElementById("time");
// initialises time variable for quiz
var time = timeAllocated;
// stores start button reference as variable
var startBtn = document.getElementById("start");
// initialises questionsIndex
var questionsIndex = 0;
// initialises score
var score = 0;
// checks if user selected an option during quiz
var choiceIsSelected = false;
// references first anchor tag which is currently the anchor tag that links to hiscores
var allAnchorElements = document.querySelector("a");

// ------------------------------ GLOBAL FUNCTIONS ------------------------------
// puts question into the webpage
function asksQuestion() {
    // references to question title element
    var questionTitleElement = document.getElementById("question-title");
    var questionObj = questions[questionsIndex];
    questionTitleElement.innerHTML = questionObj.question;
    generateChoices(questionObj);
    choiceIsSelected = false;
}


// generates buttons for each choice in array of property name "choices" for the question object
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


// provides visual and audible feedback
function givesFeedback(choiceIsCorrect) {
    // references feedback HTML element
    var feedbackElement = document.getElementById("feedback");
    var noAudioElementFound = document.getElementById("feedback-audio") === null;
    if (noAudioElementFound) {
        var audioElement = document.createElement("audio");
        console.log(audioElement);
        audioElement.setAttribute("id", "feedback-audio");
    } else {
        var audioElement = document.getElementById("feedback-audio");
    }
    if (choiceIsCorrect) {
        feedbackElement.innerText = "Correct!";
        console.log(document.getElementById("feedback-audio"));
        audioElement.setAttribute("src", "assets/sfx/correct.wav");
        audioElement.play();
    } else {
        feedbackElement.innerText = "Wrong!";
        audioElement.setAttribute("src", "assets/sfx/incorrect.wav");
        audioElement.play();
    }
    feedbackElement.classList.remove("hide");
    setTimeout(function () {
        feedbackElement.classList.add("hide");
    }, 9000);
}

// ------------------------------ ALL EVENT LISTENERS ------------------------------
// confirms if user wants to navigate away from quiz and lose all progress
allAnchorElements.addEventListener("click", function (event) {
    var linkIsclicked = confirm("Are you sure you want to leave? Any progress will be lost!");
    if (!linkIsclicked) {
        event.preventDefault();
    }
})


// start button actions
startBtn.addEventListener("click", function () {
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
                finalScoreElement.innerText = "0 🦉";
                finalScoreElement.setAttribute("style", "animation: grow 60s ease-out infinite")
                score = 0;
            }
        }
    }, 1000);
    // asks the first question
    asksQuestion();
});


// listens for which option user clicks as answer. the choice value is processed within callback function????
var choicesElement = document.getElementById("choices");
choicesElement, addEventListener("click", function (event) {
    console.log(event);
    var questionObj = questions[questionsIndex];
    console.log(questionObj.answer);
    var buttonClicked = (event.target.tagName.toLowerCase() === "button") &&
        event.target.parentNode.className === "choices";
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
    } if (score < 0) {
        score = 0;
    }
});


// references submit button
var submitBtn = document.getElementById("submit");
// submit button actions
submitBtn.addEventListener("click", function (event) {
    console.log("submit is working");
    // references input field
    var userInitials = document.getElementById("initials");
    // gets user input
    var initials = userInitials.value;
    // checks if there is local storage data stored
    var noHiscoresDataFound = localStorage.getItem("hiscoresData") === null;
    if (noHiscoresDataFound) {
        var hiscoresData = [];
        console.log("no data found")
    } else {
        var hiscoresData = JSON.parse(localStorage.getItem("hiscoresData"));
        console.log("hiscores found");
    }
    // hiscore details put into an object
    var hiscoresDataObj = [{
        initials: initials,
        score: score
    }];
    // adds hiscores details into array to be put into local storage
    hiscoresData.push(hiscoresDataObj)
    // turns data into string
    var hiscoresDataString = JSON.stringify(hiscoresData);
    console.log(hiscoresData);
    // puts JSON string into local storage
    localStorage.setItem("hiscoresData", hiscoresDataString);
    // redirects to hiscores
    location.href = "highscores.html";
});

// ------------------------------ RUNS WHEN PAGE LOADS ------------------------------
// adds how much time user is given to do all questions;
timerOnStartElement.innerText = timeAllocated; 