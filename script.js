let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("input");
const body = document.getElementById("results")
const roundResult = document.createElement("div");
const finalResult = document.createElement("div");
const div = document.createElement("div");
const score = document.createElement("div")


body.appendChild(score);
body.appendChild(roundResult);
body.appendChild(finalResult);
body.appendChild(div)


let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * choices.length);
    return choices[compChoice];
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
    finalResult.innerHTML = (`${final}`);
    finalResult.c
    div.textContent = ("\nReload to play again!");
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection) {
    
    let computerSelection  = getComputerChoice().toLowerCase();
    let result = "";
    let finalResult = "";
    
    if (playerSelection == computerSelection) {
        result = ("Tie");
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper") 
        ) {
            result = (`Your Point! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
            playerScore++
            score.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore}`
            if (playerScore == 5) {
                final = "You Won :) Congrats!"
                finalResult.textContent = final;
                disableButtons()
            } 
    } else  {
        result = (`Computer's Point!! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)
        computerScore++
        score.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore}`
        if (computerScore == 5) {
            final = ("You Lost :( Better luck next time")
            disableButtons()
        }
    }
    roundResult.textContent = result;
    
}



buttons.forEach(button => {
    button.addEventListener("click", function (){
        playRound(button.value)
    })
});

