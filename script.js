let playerChoice;

const getRandomChoice = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber < 3) {
    return (playerChoice = "Rock");
  } else if (randomNumber < 6) {
    return (playerChoice = "Paper");
  } else {
    return (playerChoice = "Scissors");
  }
};

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const gameRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    roundWinner = "Player";
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    computerScore++;
    roundWinner = "Computer";
  } else {
    return "tie!";
  }
};

// function game() {
//   for (let i = 0; i <= 5; i++) {
//     return winnerOfRound(playerChoice);
//   }
// }

console.log(game());
