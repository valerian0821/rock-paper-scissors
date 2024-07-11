
// function getComputerChoice() {
//     let comp_choice = Math.random();
//     if (comp_choice < (1 / 3)) {
//         comp_choice = "Paper";
//     } else if (comp_choice >= (2 / 3)) {
//         comp_choice = "Rock";
//     } else {
//         comp_choice = "Scissors";
//     }
//     return comp_choice;
// }

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

// function playRound(humanChoice, computerChoice) {
//     let foundWinner = false;
//     while (foundWinner == false) {
//         if (humanChoice != computerChoice) {
//             foundWinner = true;
//         } else {
//             alert("The result is a draw. Please go again.");
//             computerChoice = getComputerChoice();
//             humanChoice = getHumanChoice();
//         }
//     }

//     let rockWeight = 3;
//     let scissorsWeight = 2;
//     let paperWeight = 1;
//     let humanWeight;
//     let computerWeight;
//     if (humanChoice == "Rock") {
//         humanWeight = rockWeight;
//     } else if (humanChoice == "Scissors") {
//         humanWeight = scissorsWeight;
//     } else {
//         humanWeight = paperWeight;
//     }
//     if (computerChoice == "Rock") {
//         computerWeight = rockWeight;
//     } else if (computerChoice == "Scissors") {
//         computerWeight = scissorsWeight;
//     } else {
//         computerWeight = paperWeight;
//     }

//     if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Rock")) {
//         humanWeight = humanWeight / (-1);
//         computerWeight = computerWeight / (-1);
//     }
//     // This is to flip the weight to ensure paper beats rock as the weight of the paper is lower otherwise.

//     if (humanWeight > computerWeight) {
//         humanScore++;
//         console.log(`${humanChoice} beats ${computerChoice}! You have WON the round!`);
//     } else {
//         computerScore++;
//         console.log(`${computerChoice} beats ${humanChoice}! You have LOST the round!`);
//     }
// }

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if (humanScore > computerScore) {
//         alert(`You have won ${humanScore} rounds compared to the computer's ${computerScore}. You have WON the game.`);
//     } else {
//         alert(`The computer has won ${computerScore} rounds compared to your ${humanScore}. You have LOST the game.`);  
//     }
// }

// // Main
// let humanScore = 0;
// let computerScore = 0;
// playGame();
