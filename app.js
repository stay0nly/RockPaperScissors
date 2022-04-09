const playerSelection = prompt('Type Rock, Paper, Scissors', '');

function computerPlay() {
    var values = ["Rock","Paper","Scissors"],
        computerSelection = values[Math.floor(Math.random() * values.length)];
    
    return(computerSelection);
}

function game(output) {
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
    };
    return(output);
};

