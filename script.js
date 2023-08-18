let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * choices.length)
    return choices[compChoice]
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {

playerSelection = prompt("Enter your choice (Rock, Paper, Scissors)").toLowerCase();
computerSelection  = getComputerChoice().toLowerCase();

if (playerSelection == computerSelection) {
        console.log("Tie");
    }
}
   

  
console.log(playRound(playerSelection, computerSelection));
  