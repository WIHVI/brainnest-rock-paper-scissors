// Rock, Paper, Scissor - Game

const computerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
};

const playerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let result;

    if (player === computer) {
        result = "it's a draw!";
    } else if (player === "rock" && computer === "paper") {
        result = "computer win!";
    } else if (player === "rock" && computer === "scissors") {
        result = "player win!";
    } else if (player === "paper" && computer === "rock") {
        result = "player win!";
    } else if (player === "paper" && computer === "scissors") {
        result = "computer win!";
    } else if (player === "scissors" && computer === "paper") {
        result = "player win!";
    } else if (player === "scissors" && computer === "rock") {
        result = "computer win!";
    }

    return result;
}

const gameOn = () => {
    const player = [];
    const computer = [];

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "player win!") {
            player.push(result);
        } else if (result === "computer win!") {
            computer.push(result);
        }
    }

    if (player.length > computer.length) {
        console.log("* Player is the winner! 🥳 *");
    } else if (player.length < computer.length) {
        console.log("* Computer is the winner! 🥳 *");
    } else {
        console.log("* It's a draw! 😐 *");
    }
}

gameOn();