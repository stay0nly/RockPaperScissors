let userScore = 0;
let pcScore = 0;
const userScoreNumber = document.getElementById('human_score');
const pcScoreNumber = document.getElementById('computer_score');
const scores = document.querySelector('.scores');
const result = document.querySelector('.result > p');
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');


// Generating computer's choice
function computerPlay() {
    const values = ["rock","paper","scissors"];
    const computerSelection = values[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// Result functions
function win(playerSelection, computerSelection) {
    userScore++;
    userScoreNumber.innerHTML = userScore;
    result.innerHTML = playerSelection + " beats " + computerSelection + ". You Win! 😎"
}
function lose(playerSelection, computerSelection) {
    pcScore++;
    pcScoreNumber.innerHTML = pcScore;
    result.innerHTML = playerSelection + " beats " + computerSelection + ". You Lost! 😥"
}
function draw(playerSelection, computerSelection) {
    result.innerHTML = "😁 It's a Draw! 😁"
}

//Game
function game(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        draw(playerSelection, computerSelection);
    } else if (
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        lose(playerSelection, computerSelection);          
    } else {
        win(playerSelection, computerSelection);
    }
}


//Element click on the webpage
function selection() {
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

selection();



//One round play
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         alert("DRAW!");
//     } else if (
//         (playerSelection === "paper" && computerSelection === "scissors") || 
//         (playerSelection === "rock" && computerSelection === "paper") ||
//         (playerSelection === "scissors" && computerSelection === "rock")) {
//             alert("PC Wins!");          
//     } else {
//         alert("Human Wins!");
//     }
   
// };

