let userScore = 0;
let compScore = 0;

function computerPlay() {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    return (cpuChoice = "Scissor");
  } else if (cpuChoice === 1) {
    return (cpuChoice = "Paper");
  } else {
    return (cpuChoice = "Rock");
  }
}

function playRound(playerSelection, computerSelection) {
  // playerChoice = prompt("Rock, Paper, Scissors; First to 3 Wins!");
  // firstLetter = playerChoice.slice(0, 1);
  // capFirstLetter = firstLetter.toUpperCase();
  // remaining = playerChoice.slice(1);
  // remainingLower = remaining.toLowerCase();
  // playerSelection = capFirstLetter + remainingLower;
  computerSelection = computerPlay();
  // console.log(playerSelection);
  // console.log(computerSelection);
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
  // } else {
  //   return alert("Make a valid choice, check your punctuation");
  // }
  }
}

// function game() {
//   for (i = 0; i <= 10; i++) {
//     playRound();
//     console.log(`User Score: ${userScore}`);
//     console.log(`Comp Score ${compScore}`);
//     if (userScore == 3) {
//       return alert(`Congratulations! User Wins! Total Wins: ${userScore}`);
//     } else if (compScore == 3) {
//       return alert(
//         `Better Luck Next Time! Computer Wins! Total Comp Wins: ${compScore}`
//       );
//     }
//   }
// }

// game();

// DOM Manipulation for Front End UI
const cont = document.querySelector(".container");
const header = document.createElement("header");
header.classList.add("header");
header.textContent = "Rock Paper Scissors Challenge";
header.setAttribute(
  "style",
  "text-align: center; padding: 10px; font-size: 24px; font-weight: bold; min-height: 10vh"
);
cont.appendChild(header);

const main = document.createElement("main");
cont.appendChild(main);
const instruction = document.createElement("h2");
instruction.textContent = "Make a choice, first to 3 wins the game";
instruction.setAttribute(
  "style",
  "background: gray; color: white; font-weight: bold; min-height: 15vh;"
);
instruction.classList.add("instruction");
main.appendChild(instruction);
const scores = document.createElement("div");
scores.classList.add("scores");
const uScore = document.createElement("span");
uScore.classList.add("uScore");
const cScore = document.createElement("span");
cScore.classList.add("cScore");
uScore.textContent = "User: 0";
cScore.textContent = "Comp: 0";

main.appendChild(scores);
scores.appendChild(uScore);
scores.appendChild(cScore);

const buttonHolder = document.createElement("div");
buttonHolder.classList.add("holder");
main.appendChild(buttonHolder);

const choices = document.createElement("button");
choices.classList.add("choices");
choices.textContent = "Scissor";
choices.style.color = "white";
choices.style.fontSize = "1.3rem";
choices.addEventListener("click", playRound());
const choices1 = document.createElement("button");
choices1.classList.add("choices");
choices1.textContent = "Rock";
choices1.style.color = "white";
choices1.style.fontSize = "1.3rem";

const choices2 = document.createElement("button");
choices2.classList.add("choices");
choices2.textContent = "Paper";
choices2.style.color = "white";
choices2.style.fontSize = "1.3rem";

buttonHolder.appendChild(choices1);
buttonHolder.appendChild(choices2);
buttonHolder.appendChild(choices);

const footer = document.createElement("footer");
footer.classList.toggle("footer");
footer.textContent = "Made by bspence205 with Vanilla HTML, CSS & JAVASCRIPT";
// footer.style.justifySelf = "flex-end"

cont.appendChild(footer);

choices2.addEventListener("click", () => {
  computerSelection = computerPlay();
  if (computerSelection == "Scissor") {
    alert("You Lose");
  } else {
    alert("Winner");
  }
  console.log(choices2.textContent);
  console.log(computerSelection);
});

choices1.addEventListener("click", () => {
  computerSelection = computerPlay();
  if (computerSelection == "Paper") {
    alert("You Lose");
  } else {
    alert("Winner");
  }
  console.log(choices1.textContent);
  console.log(computerSelection);
});

choices.addEventListener("click", () => {
  computerSelection = computerPlay();
  if (computerSelection == "Rock") {
    alert("You Lose");
  } else {
    alert("Winner");
  }
  console.log(choices.textContent);
  console.log(computerSelection);
});
