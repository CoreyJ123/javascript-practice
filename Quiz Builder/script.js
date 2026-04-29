const answers = {
    q1: "Buddy"
}

let playerScore = 0;

const scoreDisplay = document.querySelector("#current-score");
scoreDisplay.innerHTML = playerScore;

// Get the answers from the form
const quiz = document.querySelector("#quiz-form")
quiz.addEventListener("submit", (e) => {
    const q1answer = document.querySelector("#q1").value;
    e.preventDefault();

    // Compare them with the correct answers
    if(q1answer === answers.q1){
        playerScore++;
        console.log("Yes!! Your score is: " + playerScore);
        scoreDisplay.innerHTML = playerScore;
    }else{
        console.log("Actually it's Buddy");
    }
})



