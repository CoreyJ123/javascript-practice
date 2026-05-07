const answers = {
    q1: "Buddy",
    q2: 8,
    q3: 50
}

let playerScore = 0;

const scoreDisplay = document.querySelector("#current-score");
scoreDisplay.innerHTML = playerScore;

// Get the answers from the form
const quiz = document.querySelector("#quiz-form")
quiz.addEventListener("submit", (e) => {
    const q1answer = document.querySelector("#q1");
    const q2answer = document.querySelector("#q2").value;
    const q3answer = document.querySelector("#q3").value;
    e.preventDefault();

    // Compare them with the correct answers
    if(q1answer === answers.q1){
        playerScore++;
        console.log("Yes!! Your score is: " + playerScore);
        scoreDisplay.innerHTML = playerScore;
    }else{
        console.log("Actually it's Buddy");
    }
    if(q2answer === answers.q2){
        playerScore++;
        console.log("Yes!! Your score is: " + playerScore);
        scoreDisplay.innerHTML = playerScore;
    }else{
        console.log("Actually it's 8");
    }
    if(q3answer === answers.q3){
        playerScore++;
        console.log("Yes!! Your score is: " + playerScore);
        scoreDisplay.innerHTML = playerScore;
    }else{
        console.log("Actually it's 50");
    }
})



