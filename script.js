let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * choices.length)
    return choices[compChoice]
}

console.log(playRound(playerSelection, computerSelection));
  