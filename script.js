const userChoice = prompt("What will be your play");
const upperCaseChoice =
  userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
let computerChoice;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber < 3) {
    return (computerChoice = "Rock");
  } else if (randomNumber < 6) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
};

const winnerOfRound = () => {
  if (upperCaseChoice === "Rock" && computerChoice === "Scissors") {
    return "The user wins!";
  } else if (upperCaseChoice === "Paper" && computerChoice === "Rock") {
    return "The user wins!";
  } else if (upperCaseChoice === "Scissors" && computerChoice === "Paper") {
    return "The user wins!";
  } else if (upperCaseChoice === computerChoice) {
    return "Draw!";
  } else {
    return "Computer wins!";
  }
};

console.log(upperCaseChoice);
console.log(getComputerChoice());
console.log(winnerOfRound());
