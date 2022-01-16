// function for computer choice to randomly be generated

function computerPlay() {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice == 0) {
    return console.log("Scissors");
  } else if (cpuChoice == 1) {
    return console.log("Paper");
  } else {
    return console.log("Rock");
  }
}
