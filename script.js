
function getComputerChoice() {
    let comp_choice = Math.random();
    if (comp_choice < (1 / 3)) {
        comp_choice = "Paper";
    } else if (comp_choice >= (2 / 3)) {
        comp_choice = "Rock";
    } else {
        comp_choice = "Scissors";
    }
    return comp_choice;
}

// function getHumanChoice() {
//     let human_choice = "";
//     let userInput = false;
//     while (userInput === false) {
//         human_choice = prompt("What's your choice?");
//         human_choice = human_choice.toLowerCase();
//         human_choice = human_choice.charAt(0).toUpperCase() + human_choice.slice(1); 
//         if (human_choice == "Rock" || human_choice == "Scissors" || human_choice == "Paper") {
//             userInput = true;
//             return human_choice;
//         } else {
//             alert("Your input is not valid. Please try again.");
//         }
//     }
// }

function playRound(humanChoice, computerChoice) {
    let foundWinner = false;
    while (foundWinner == false) {
        if (humanChoice != computerChoice) {
            foundWinner = true;
        } else {
            display.textContent = "It is a draw. Please go again.";
            return;
        }
    }
    let rockWeight = 3;
    let scissorsWeight = 2;
    let paperWeight = 1;
    let humanWeight;
    let computerWeight;
    if (humanChoice == "Rock") {
        humanWeight = rockWeight;
    } else if (humanChoice == "Scissors") {
        humanWeight = scissorsWeight;
    } else {
        humanWeight = paperWeight;
    }
    if (computerChoice == "Rock") {
        computerWeight = rockWeight;
    } else if (computerChoice == "Scissors") {
        computerWeight = scissorsWeight;
    } else {
        computerWeight = paperWeight;
    }

    if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Rock")) {
        humanWeight = humanWeight / (-1);
        computerWeight = computerWeight / (-1);
    }
    // This is to flip the weight to ensure paper beats rock as the weight of the paper is lower otherwise.

    if (humanWeight > computerWeight) {
        humanScore++;
        playerScore.textContent = `${humanScore}`;
        display.textContent = `${humanChoice} beats ${computerChoice}! You have WON the round!`;
    } else {
        computerScore++;
        compScore.textContent = `${computerScore}`;
        display.textContent = `${computerChoice} beats ${humanChoice}! You have LOST the round!`;
    }
    if (humanScore + computerScore == 5) {
        if (humanScore > computerScore) {
            display.textContent = "You have WON the game!";
        } else {
            display.textContent = "You have LOST the game";
        }
    } 
}

function startGame() {
    rockBtn.addEventListener("click", function chooseRock() {
        if (humanScore + computerScore == 5) {
            rockBtn.removeEventListener("click", chooseRock);
        } else {
            playRound("Rock", getComputerChoice());
        }  
    });
    paperBtn.addEventListener("click", function choosePaper() { 
        if (humanScore + computerScore == 5) {
            paperBtn.removeEventListener("click", choosePaper);
        } else {
            playRound("Paper", getComputerChoice());
        }
    });
    scissorsBtn.addEventListener("click", function chooseScissors() {  
        if (humanScore + computerScore == 5) {
            scissorsBtn.removeEventListener("click", chooseScissors);
        } else {
            playRound("Scissors", getComputerChoice());
        }
    });
}

let humanScore = 0;
let computerScore = 0;
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const result = document.querySelector("#result-box");
const display = document.querySelector("#result-display");
let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");
startGame();
