const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleCohoices = document.querySelectorAll(".btn");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const winner = document.getElementById("winner");
const restartGameButton = document.getElementById("restart");
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let result = "";

possibleCohoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playerChoiceDisplay.innerHTML = playerSelection;
    computerChoice();
    playRound();

    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;

    if (playerScore === 5) {
      winner.innerHTML = "* Player is the winner! 🥳 *";
    } else if (computerScore === 5) {
      winner.innerHTML = "* Computer is the winner! 🥳 *";
    }
  })
);

const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * 3)];
  computerChoiceDisplay.innerHTML = computerSelection;
};

const playRound = () => {
  if (playerSelection === computerSelection) {
    result = "it's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = "you lose!";
    computerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "you win!";
    playerScore++;
  }

  resultDisplay.innerHTML = result;
};

restartGameButton.addEventListener("click", () => {
  window.location.reload();
});
