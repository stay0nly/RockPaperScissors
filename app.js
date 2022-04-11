const userScore = 0;
const pcScore = 0;
const userScoreNumber = document.getElementById('human_score');
const pcScoreNumber = document.getElementById('computer_score');
const scores = document.querySelector('.scores');
const result = document.querySelector('.result');
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');

function game(userChoice) {

}

//Element click on the webpage
function playerSelection() {
rockElement.addEventListener('click', function() {
    game("rock");
});

paperElement.addEventListener('click', function() {
    game("paper");
});

scissorsElement.addEventListener('click', function() {
    game("scissors");
});
};


// Generating computer's choice
function computerPlay() {
    const values = ["rock","paper","scissors"];
    const computerSelection = values[Math.floor(Math.random() * 3)];
    return computerSelection;
};

//One round play
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("DRAW!");
    } else if (
        (playerSelection === "paper" && computerSelection === "scissors") 
        (playerSelection === "rock" && computerSelection === "paper")
        (playerSelection === "scissors" && computerSelection === "rock")) {
            alert("PC Wins!");          
    } else {
        alert("Human Wins!");
    }
   
};

