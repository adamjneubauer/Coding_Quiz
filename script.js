// Declare variables equal to HTML element ID
var startButton = document.getElementById("start-button")
var clockContainer = document.getElementById("timerFinal")
var gameClock = document.getElementById("game-clock")
var answerChoices = document.getElementById("answer-choices")
var scoreCounter = document.getElementById("score-counter")
var gameOver = document.getElementById("game-over-screen")
var highScore = document.getElementById("high-score")
var question = document.getElementById("question-display")
var A = document.getElementById("choice-A")
var B = document.getElementById("choice-B")
var C = document.getElementById("choice-C")
var D = document.getElementById("choice-D")
var A2 = document.getElementById("choice-A2")
var B2 = document.getElementById("choice-B2")
var C2 = document.getElementById("choice-C2")
var D2 = document.getElementById("choice-D2")
var A3 = document.getElementById("choice-A3")
var B3 = document.getElementById("choice-B3")
var C3 = document.getElementById("choice-C3")
var D3 = document.getElementById("choice-D3")
var A4 = document.getElementById("choice-A4")
var B4 = document.getElementById("choice-B4")
var C4 = document.getElementById("choice-C4")
var D4 = document.getElementById("choice-D4")
var A5 = document.getElementById("choice-A5")
var B5 = document.getElementById("choice-B5")
var C5 = document.getElementById("choice-C5")
var D5 = document.getElementById("choice-D5")

// Set display of scores to 0, and declare functions and variables used for score display functionality
var score = 0;
var highScoreDisplay = 0;
function adder() {
    score++
};
scoreCounter.textContent = "Your score: " + score;
highScore.textContent = "High score: " + highScoreDisplay;
function reset() {
    score = 0;
    return score;
}

// Hide elements we don't want to see upon loading
A.setAttribute("style", "display: none")
A2.setAttribute("style", "display: none")
A3.setAttribute("style", "display: none")
A4.setAttribute("style", "display: none")
A5.setAttribute("style", "display: none")
B.setAttribute("style", "display: none")
B2.setAttribute("style", "display: none")
B3.setAttribute("style", "display: none")
B4.setAttribute("style", "display: none")
B5.setAttribute("style", "display: none")
C.setAttribute("style", "display: none")
C2.setAttribute("style", "display: none")
C3.setAttribute("style", "display: none")
C4.setAttribute("style", "display: none")
C5.setAttribute("style", "display: none")
D.setAttribute("style", "display: none")
D2.setAttribute("style", "display: none")
D3.setAttribute("style", "display: none")
D4.setAttribute("style", "display: none")
D5.setAttribute("style", "display: none")

// Add on-click behavior to cycle through questions, and display elements in logical order
startButton.addEventListener("click", function () {
    A.setAttribute("style", "display:block")
    B.setAttribute("style", "display:block")
    C.setAttribute("style", "display:block")
    D.setAttribute("style", "display:block")
    question.textContent = "Arrays can contain all of the following except:"
    startButton.setAttribute("style", "display: none")
    clockContainer.setAttribute("style", "display: block")
    reset(score);
    scoreCounter.textContent = "Your score: " + score;

})

A.addEventListener("click", function () {
    A.setAttribute("style", "display: none")
    B.setAttribute("style", "display: none")
    C.setAttribute("style", "display: none")
    D.setAttribute("style", "display: none")
    A2.setAttribute("style", "display:block")
    B2.setAttribute("style", "display:block")
    C2.setAttribute("style", "display:block")
    D2.setAttribute("style", "display:block")
    question.textContent = "Which of the following is not a semantic HTML element?"
})

B.addEventListener("click", function () {
    A.setAttribute("style", "display: none")
    B.setAttribute("style", "display: none")
    C.setAttribute("style", "display: none")
    D.setAttribute("style", "display: none")
    A2.setAttribute("style", "display:block")
    B2.setAttribute("style", "display:block")
    C2.setAttribute("style", "display:block")
    D2.setAttribute("style", "display:block")
    question.textContent = "Which of the following is not a semantic HTML element?"
})

C.addEventListener("click", function () {
    A.setAttribute("style", "display: none")
    B.setAttribute("style", "display: none")
    C.setAttribute("style", "display: none")
    D.setAttribute("style", "display: none")
    A2.setAttribute("style", "display:block")
    B2.setAttribute("style", "display:block")
    C2.setAttribute("style", "display:block")
    D2.setAttribute("style", "display:block")
    question.textContent = "Which of the following is not a semantic HTML element?";
    adder()
    scoreCounter.textContent = "Your score: " + score
})

D.addEventListener("click", function () {
    A.setAttribute("style", "display: none")
    B.setAttribute("style", "display: none")
    C.setAttribute("style", "display: none")
    D.setAttribute("style", "display: none")
    A2.setAttribute("style", "display:block")
    B2.setAttribute("style", "display:block")
    C2.setAttribute("style", "display:block")
    D2.setAttribute("style", "display:block")
    question.textContent = "Which of the following is not a semantic HTML element?"

})

A2.addEventListener("click", function () {
    A2.setAttribute("style", "display: none")
    B2.setAttribute("style", "display: none")
    C2.setAttribute("style", "display: none")
    D2.setAttribute("style", "display: none")
    A3.setAttribute("style", "display:block")
    B3.setAttribute("style", "display:block")
    C3.setAttribute("style", "display:block")
    D3.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to remove the last item of an array?"

})

B2.addEventListener("click", function () {
    A2.setAttribute("style", "display: none")
    B2.setAttribute("style", "display: none")
    C2.setAttribute("style", "display: none")
    D2.setAttribute("style", "display: none")
    A3.setAttribute("style", "display:block")
    B3.setAttribute("style", "display:block")
    C3.setAttribute("style", "display:block")
    D3.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to remove the last item of an array?"
    adder()
    scoreCounter.textContent = "Your score: " + score

})

C2.addEventListener("click", function () {
    A2.setAttribute("style", "display: none")
    B2.setAttribute("style", "display: none")
    C2.setAttribute("style", "display: none")
    D2.setAttribute("style", "display: none")
    A3.setAttribute("style", "display:block")
    B3.setAttribute("style", "display:block")
    C3.setAttribute("style", "display:block")
    D3.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to remove the last item of an array?"

})

D2.addEventListener("click", function () {
    A2.setAttribute("style", "display: none")
    B2.setAttribute("style", "display: none")
    C2.setAttribute("style", "display: none")
    D2.setAttribute("style", "display: none")
    A3.setAttribute("style", "display:block")
    B3.setAttribute("style", "display:block")
    C3.setAttribute("style", "display:block")
    D3.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to remove the last item of an array?"

})

A3.addEventListener("click", function () {
    A3.setAttribute("style", "display: none")
    B3.setAttribute("style", "display: none")
    C3.setAttribute("style", "display: none")
    D3.setAttribute("style", "display: none")
    A4.setAttribute("style", "display:block")
    B4.setAttribute("style", "display:block")
    C4.setAttribute("style", "display:block")
    D4.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to append the last item of an array?"
    adder()
    scoreCounter.textContent = "Your score: " + score

})

B3.addEventListener("click", function () {
    A3.setAttribute("style", "display: none")
    B3.setAttribute("style", "display: none")
    C3.setAttribute("style", "display: none")
    D3.setAttribute("style", "display: none")
    A4.setAttribute("style", "display:block")
    B4.setAttribute("style", "display:block")
    C4.setAttribute("style", "display:block")
    D4.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to append the last item of an array?"
})

C3.addEventListener("click", function () {
    A3.setAttribute("style", "display: none")
    B3.setAttribute("style", "display: none")
    C3.setAttribute("style", "display: none")
    D3.setAttribute("style", "display: none")
    A4.setAttribute("style", "display:block")
    B4.setAttribute("style", "display:block")
    C4.setAttribute("style", "display:block")
    D4.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to append the last item of an array?"
})

D3.addEventListener("click", function () {
    A3.setAttribute("style", "display: none")
    B3.setAttribute("style", "display: none")
    C3.setAttribute("style", "display: none")
    D3.setAttribute("style", "display: none")
    A4.setAttribute("style", "display:block")
    B4.setAttribute("style", "display:block")
    C4.setAttribute("style", "display:block")
    D4.setAttribute("style", "display:block")
    question.textContent = "What JS function is used to append the last item of an array?"
})

A4.addEventListener("click", function () {
    A4.setAttribute("style", "display: none")
    B4.setAttribute("style", "display: none")
    C4.setAttribute("style", "display: none")
    D4.setAttribute("style", "display: none")
    A5.setAttribute("style", "display:block")
    B5.setAttribute("style", "display:block")
    C5.setAttribute("style", "display:block")
    D5.setAttribute("style", "display:block")
    question.textContent = "What are used to change how CSS displays based on screen size/type?"

})

B4.addEventListener("click", function () {
    A4.setAttribute("style", "display: none")
    B4.setAttribute("style", "display: none")
    C4.setAttribute("style", "display: none")
    D4.setAttribute("style", "display: none")
    A5.setAttribute("style", "display:block")
    B5.setAttribute("style", "display:block")
    C5.setAttribute("style", "display:block")
    D5.setAttribute("style", "display:block")
    question.textContent = "What are used to change how CSS displays based on screen size/type?"

})

C4.addEventListener("click", function () {
    A4.setAttribute("style", "display: none")
    B4.setAttribute("style", "display: none")
    C4.setAttribute("style", "display: none")
    D4.setAttribute("style", "display: none")
    A5.setAttribute("style", "display:block")
    B5.setAttribute("style", "display:block")
    C5.setAttribute("style", "display:block")
    D5.setAttribute("style", "display:block")
    question.textContent = "What are used to change how CSS displays based on screen size/type?"

})

D4.addEventListener("click", function () {
    A4.setAttribute("style", "display: none")
    B4.setAttribute("style", "display: none")
    C4.setAttribute("style", "display: none")
    D4.setAttribute("style", "display: none")
    A5.setAttribute("style", "display:block")
    B5.setAttribute("style", "display:block")
    C5.setAttribute("style", "display:block")
    D5.setAttribute("style", "display:block")
    question.textContent = "What are used to change how CSS displays based on screen size/type?"
    adder()
    scoreCounter.textContent = "Your score: " + score
})

A5.addEventListener("click", function () {
    A5.setAttribute("style", "display: none")
    B5.setAttribute("style", "display: none")
    C5.setAttribute("style", "display: none")
    D5.setAttribute("style", "display: none")
    question.textContent = "Game Over!"
    startButton.setAttribute("style", "display: block")
    clockContainer.setAttribute("style", "display: none")
    adder()
    scoreCounter.textContent = "Your score: " + score;
    if (score >= highScoreDisplay) {
        highScore.textContent = "High score: " + score
    }
})

B5.addEventListener("click", function () {
    A5.setAttribute("style", "display: none")
    B5.setAttribute("style", "display: none")
    C5.setAttribute("style", "display: none")
    D5.setAttribute("style", "display: none")
    question.textContent = "Game Over!"
    startButton.setAttribute("style", "display: block")
    clockContainer.setAttribute("style", "display: none")
    if (score >= highScoreDisplay) {
        highScore.textContent = "High score: " + score
    }
})

C5.addEventListener("click", function () {
    A5.setAttribute("style", "display: none")
    B5.setAttribute("style", "display: none")
    C5.setAttribute("style", "display: none")
    D5.setAttribute("style", "display: none")
    question.textContent = "Game Over!"
    startButton.setAttribute("style", "display: block")
    clockContainer.setAttribute("style", "display: none")
    if (score >= highScoreDisplay) {
        highScore.textContent = "High score: " + score
    }
})

D5.addEventListener("click", function () {
    A5.setAttribute("style", "display: none")
    B5.setAttribute("style", "display: none")
    C5.setAttribute("style", "display: none")
    D5.setAttribute("style", "display: none")
    question.textContent = "Game Over!"
    startButton.setAttribute("style", "display: block")
    clockContainer.setAttribute("style", "display: none")
    if (score >= highScoreDisplay) {
        highScore.textContent = "High score: " + score
    }
})

// Timer function start and restart behavior
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    window.interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;

            if (minutes == 0 && seconds == 0) {
                clearInterval(interval);
                A5.setAttribute("style", "display: none")
                B5.setAttribute("style", "display: none")
                C5.setAttribute("style", "display: none")
                D5.setAttribute("style", "display: none")
                A4.setAttribute("style", "display: none")
                B4.setAttribute("style", "display: none")
                C4.setAttribute("style", "display: none")
                D4.setAttribute("style", "display: none")
                A3.setAttribute("style", "display: none")
                B3.setAttribute("style", "display: none")
                C3.setAttribute("style", "display: none")
                D3.setAttribute("style", "display: none")
                A2.setAttribute("style", "display: none")
                B2.setAttribute("style", "display: none")
                C2.setAttribute("style", "display: none")
                D2.setAttribute("style", "display: none")
                A.setAttribute("style", "display: none")
                B.setAttribute("style", "display: none")
                C.setAttribute("style", "display: none")
                D.setAttribute("style", "display: none")
                clockContainer.setAttribute("style", "display: none")
                question.textContent = "Game Over!"
                startButton.setAttribute("style", "display: block")
                if (score >= highScoreDisplay) {
                    highScore.textContent = "High score: " + score
                }
                return;
            }
        }
    }, 1000);
}

startButton.onclick = function () {
    clearInterval(window.interval);
    var twoMinutes = 60 * 2,
        display = document.querySelector('#game-clock');
    startTimer(twoMinutes, display);
};

// Question 1
A.textContent = "Arrays"
B.textContent = "Strings"
C.textContent = "Wings"
D.textContent = "Numbers"

// Question 2
A2.textContent = "<section>"
B2.textContent = "<TV>"
C2.textContent = "<h1>"
D2.textContent = "<body"

// Question 3
A3.textContent = ".pop()"
B3.textContent = ".last()"
C3.textContent = ".cat()"
D3.textContent = ".dog()"

// Question 4
A4.textContent = ".pop()"
B4.textContent = ".last()"
C4.textContent = ".cat()"
D4.textContent = ".append()"

// Question 5
A5.textContent = "Media Queries"
B5.textContent = "Screen Savers"
C5.textContent = "Resizers"
D5.textContent = "I hate CSS"

