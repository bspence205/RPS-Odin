let userScore = 0;
let compScore = 0;

// function for computer choice to randomly be generated

// const gameChoices = ["scissors", "paper", "rock"];
// const userScore = 0;
// const cpuScore = 0;

function computerPlay() {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    return (cpuChoice = "Scissors");
  } else if (cpuChoice === 1) {
    return (cpuChoice = "Paper");
  } else {
    return (cpuChoice = "Rock");
  }
}

// Below is functionally the same as the function above but uses arrays to hold choice value instead of converting

// function computerPlay() {
//   let compchoice = ["Rock", "Paper", "Scissors"];
//   return compchoice[Math.floor(Math.random() * compchoice.length)];
// }

function singleRound() {
  playerChoice = prompt("Rock, Paper, Scissors; First to 3 Wins!");
  firstLetter = playerChoice.slice(0, 1);
  capFirstLetter = firstLetter.toUpperCase();
  remaining = playerChoice.slice(1);
  remainingLower = remaining.toLowerCase();
  playerSelection = capFirstLetter + remainingLower;
  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    alert("You Win, Rock beats Scissors");
    return (userScore += 1);
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    alert("You Win, Scissors beats Paper");
    return (userScore += 1);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    alert("You Win, Paper beats Rock");
    return (userScore += 1);
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    alert("You Lose, Paper beats Rock");
    return (compScore += 1);
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    alert("You Lose, Scissors beats Paper");
    return (compScore += 1);
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    alert("You Lose, Rock beats Paper");
    return (compScore += 1);
  } else if (playerSelection === computerSelection) {
    return alert("its a tie");
  } else {
    return alert("Make a valid choice, check your punctuation");
  }
}

function game() {
  for (i = 0; i <= 10; i++) {
    singleRound();
    console.log(`User Score: ${userScore}`);
    console.log(`Comp Score ${compScore}`);
    if (userScore == 3) {
      return alert(`Congratulations! User Wins! Total Wins: ${userScore}`);
    } else if (compScore == 3) {
      return alert(
        `Better Luck Next Time! Computer Wins! Total Comp Wins: ${compScore}`
      );
    }
  }
}

game();
