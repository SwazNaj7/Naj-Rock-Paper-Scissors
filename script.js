const choices = ['Rock', 'Paper', 'Scissors'];

const computerChoice = (choices) => choices[Math.floor(choices.length * Math.random())];

let user_score = 0
let computer_score = 0
const rps = (user, compChoice) => {
    console.log("rps func User choice:", user);
    console.log("rps func Computer choice:", compChoice);

    let decision = document.getElementById("win-lose");
    let user_scoreDisplay = document.getElementById("score");
    let computer_scoreDisplay = document.getElementById("computerscore");

    if (user === compChoice) {
        decision.textContent = "Tie";
    } else if (
        (user === 'Rock' && compChoice === 'Scissors') ||
        (user === 'Paper' && compChoice === 'Rock') ||
        (user === 'Scissors' && compChoice === 'Paper')
    ) {
        decision.textContent = "You Win!!";
        user_score++;
        user_scoreDisplay.textContent = "Score: " + user_score;
    } else {
        decision.textContent = "Computer Won ;-;";
        computer_score++;
        computer_scoreDisplay.textContent = "Computer Score: " + computer_score;
    }

    if (user_score === 5 && computer_score < 5) {
        decision.textContent = "You Won, Play Again"
        user_score = 0
        computer_score = 0
        user_scoreDisplay.textContent = "Score: " + user_score;
        computer_scoreDisplay.textContent = "Computer Score: " + computer_score;
    } else if (computer_score === 5 && user_score < 5) {
        decision.textContent = "You Lost, Play Again"
        user_score = 0
        computer_score = 0
        user_scoreDisplay.textContent = "Score: " + user_score;
        computer_scoreDisplay.textContent = "Computer Score: " + computer_score;
    }
};

const rock = document.getElementById("Rock").onclick = function () {
    const compChoice = computerChoice(choices);
    userchoice("Rock", compChoice);
};

const paper = document.getElementById("Paper").onclick = function () {
    const compChoice = computerChoice(choices);
    userchoice("Paper", compChoice);
};

const scissors = document.getElementById("Scissors").onclick = function () {
    const compChoice = computerChoice(choices);
    userchoice("Scissors", compChoice);
};

function userchoice(user, compChoice) {
    console.log("User choice:", user);
    console.log("Computer choice:", compChoice);
    document.getElementById("useroutput").innerHTML = user;
    document.getElementById("computeroutput").innerHTML = compChoice;

    rps(user, compChoice);
}
