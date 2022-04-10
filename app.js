const playerSelection = prompt('Type Rock, Paper, Scissors', '');

function computerPlay() {
    var values = ["Rock","Paper","Scissors"];
    var computerSelection = values[Math.floor(Math.random() * values.length)];
 
    if (playerSelection === computerSelection) {
        alert("No winner");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("Computer wins!")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("Computer wins!")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("Computer wins!")
    } else {
        alert("Human wins!")
    }
    console.log(computerSelection);
    console.log(playerSelection);
}

computerPlay();
