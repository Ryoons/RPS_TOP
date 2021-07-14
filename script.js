
function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[getRandomInt(3)]
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

const computerSelection = computerPlay();
const playerSelection = "Rock";

function rpsRound(playerSelection, computerSelection) {
    
    if (playerSelection = "Rock") {
        if (computerSelection = "Scissors") {
            return "You Win! Rock beats Scissors"
        } if (computerSelection = "Rock") {
            return "Tie! Rock ties Rock"
        }
    }
}