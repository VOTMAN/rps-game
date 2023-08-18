let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * choices.length)
    return choices[compChoice]
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {

playerSelection = prompt("Enter your choice (Rock, Paper, Scissors)").toLowerCase();
// console.log(playerSelection);
computerSelection  = getComputerChoice().toLowerCase();
// console.log(computerSelection);

if (playerSelection == computerSelection) {
        return ("Tie");
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
        return (`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
        
    } else {
        return (`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection)
        
        if (roundResult.includes("Win")) {
            console.log(roundResult)
            playerScore++
        } else if (roundResult.includes("Lose")) {
            console.log(roundResult)
            computerScore++
        } else {
            console.log(roundResult)
        }
    }
    if (playerScore >= 3) {
        console.log(`You Won!, you got ${playerScore} points!`)
    } else {
        console.log(`You Lost!, you got ${playerScore} points!`)
    }
}

game()