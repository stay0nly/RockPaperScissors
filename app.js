const pSelection = prompt('Type Rock, Paper, Scissors', '');
const playerSelection = pSelection.toLowerCase();

function playRound() {
    var values = ["rock","paper","scissors"];
    var computerSelection = values[Math.floor(Math.random() * values.length)];
  
    if (playerSelection === computerSelection) {
        alert("No winner");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("Computer wins!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("Computer wins!")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("Computer wins!")
    } else {
        alert("Human wins!")
    }
    console.log(computerSelection);
    console.log(playerSelection);
}

function game() {
    for (let i=0; i<5; i++) {
        
    }
}
