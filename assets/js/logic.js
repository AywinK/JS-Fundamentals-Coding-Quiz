
    startsQuiz()

function startsQuiz() {
    // stores start button reference as variable
    var startBtm = document.getElementById("start");

    // hides start screen
    startBtm.addEventListener("click",function() {
        // stores reference to start screen element
        var startScreen = document.getElementById("start-screen");
        console.log("tests event listen on start button");
        // hides start screen
        startScreen.setAttribute("class", "hide")
        // calls function to run quiz
        runsQuiz()
    });

}