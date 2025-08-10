const choices = ["rock", "paper", "scissors"];
const userChoice = document.getElementById("userChoice")
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let resultText = "";


function playFunction(pChoice) {
    result.classList.remove("greenText", "redText"); // Reset text color classes

    const compChoice = choices[Math.floor(Math.random() * 3)];
    resultText = ""; // Use the globally declared resultText

    if (pChoice === compChoice) {
        resultText = "It's a tie!";
    }
    else if (
        (pChoice === "rock" && compChoice === "scissors") ||
        (pChoice === "paper" && compChoice === "rock") ||
        (pChoice === "scissors" && compChoice === "paper")
    ) {
        resultText = "You win!";
        result.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultText = "You lose!";
        result.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    userChoice.innerHTML = `You chose: ${pChoice}`;
    computerChoice.innerHTML = `Computer chose: ${compChoice}`;
    result.innerHTML = resultText;


}
function resetGame(){
    userChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    result.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
