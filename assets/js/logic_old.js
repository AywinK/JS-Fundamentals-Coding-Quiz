
startsQuiz()

function startsQuiz() {
    // stores start button reference as variable
    var startBtm = document.getElementById("start");

    // hides start screen
    startBtm.addEventListener("click", function () {
        // stores reference to start screen element
        var startScreen = document.getElementById("start-screen");
        console.log("tests event listen on start button");
        // hides start screen
        startScreen.classList.add("hide")
        // sets timer variable to time one second intervals
        var timer = setInterval(function () {
            // gets reference to time numerical value specific span on webpage
            var timerElement = document.getElementById("time");

            // sets time to 0 if time has run out
            // if (time <= 0) {
            //     timerElement.innerHTML = 0;
            // } else {
            // updates timee element
            timerElement.innerHTML = time;
            // }
            // updates time
            time--;
            console.log(`time: ${time}`)
        }, 1000)
        // calls function to run quiz
        runsQuiz()
    });

}

// stop timer when time has run out
if (time <= 0) {
    clearTimeout(timer);
}

// sets time allocated to complete quiz
var timeAllocated = questions.length * 10;
// initialises time variable for quiz
var time = timeAllocated;

function runsQuiz() {
    // checks if questions data is loaded
    console.log(questions);
    // references questions element on webpage
    var questionsElement = document.getElementById("questions");
    // show questions html element
    questionsElement.classList.remove("hide")
    // asks questions if there is time left
    for (var questionObj of questions) {
        if (time > 0) {
            // gets question reference in HTML
            var questionElement = document.getElementById("question-title");
            // gets choices reference in HTML
            var choicesElement = document.getElementById("choices");

            // adds question to webpage
            questionElement.innerHTML = questionObj.question
            // adds choices to webpage
            console.log(questionObj);
            for (var choice of questionObj.choices) {
                // create input button in choices Element
                var inputBtn = document.createElement("button");
                var choiceBtn = choicesElement.appendChild(inputBtn);
                choiceBtn.setAttribute("type", "button");
                choiceBtn.setAttribute("value", choice);
                choiceBtn.innerText = choice;
            }
        }
    }

}