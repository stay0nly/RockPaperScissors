let userScore = 0;
let pcScore = 0;
const userScoreNumber = document.getElementById('human_score');
const pcScoreNumber = document.getElementById('computer_score');
const scores = document.querySelector('.scores');
const result = document.querySelector('.result > p');
const rockElement = document.getElementById('Rock');
const paperElement = document.getElementById('Paper');
const scissorsElement = document.getElementById('Scissors');
const resetElement = document.getElementById('reset');


// Generating computer's choice
function computerPlay() {
    const values = ["Rock","Paper","Scissors"];
    const computerSelection = values[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// Result functions
function win(playerSelection, computerSelection) {
    userScore++;
    userScoreNumber.innerHTML = userScore;
    result.innerHTML = playerSelection + " beats " + computerSelection + ". You Win! 😎"
    document.getElementById(playerSelection).classList.add('win-light');
    setTimeout(function(){ document.getElementById(playerSelection).classList.remove('win-light') }, 400);
}
function lose(playerSelection, computerSelection) {
    pcScore++;
    pcScoreNumber.innerHTML = pcScore;
    result.innerHTML = playerSelection + " beats " + computerSelection + ". You Lost! 😥"
    document.getElementById(playerSelection).classList.add('lose-light');
    setTimeout(function(){ document.getElementById(playerSelection).classList.remove('lose-light') }, 400);
}
function draw(playerSelection, computerSelection) {
    result.innerHTML = "😁 It's a Draw! 😁"
    document.getElementById(playerSelection).classList.add('draw-light');
    setTimeout(function(){ document.getElementById(playerSelection).classList.remove('draw-light') }, 400);
}

//Game
function game(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        draw(playerSelection, computerSelection);
    } else if (
        (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        lose(playerSelection, computerSelection);          
    } else {
        win(playerSelection, computerSelection);
    }
}


//Element click on the webpage
function selection() {
rockElement.addEventListener('click', function() {
    game("Rock");
});

paperElement.addEventListener('click', function() {
    game("Paper");
});

scissorsElement.addEventListener('click', function() {
    game("Scissors");
});
};

selection();

function resetScores() {
    resetElement.addEventListener('click', function() {
        pcScoreNumber.innerHTML = 0;
        pcScore = 0;
        userScoreNumber.innerHTML = 0;
        userScore = 0;             
    })
}

resetScores();

