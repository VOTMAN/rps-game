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

if (playerSelection != choices.toLowerCase()) {
    console.log("Invalid Input by Player")
} 

if (playerSelection == computerSelection) {
        console.log("Tie");
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "Rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        // playerScore++
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        // computerScore++
    }
}
     
console.log(playRound(playerSelection, computerSelection));
  