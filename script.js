
// Function that generates random choice as the computer

function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[randomChoice]
}
computerPlay();
let computerSelection = computerPlay();
const playerSelection = "Rock";

console.log('Player:' + playerSelection)
console.log('Computer:' + computerSelection)

function rpsRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors"
        } if (computerSelection === "Rock") {
            return "Tie! Rock ties Rock"
        } else {
            return "You Lose! Paper beats Rock"
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock"
        } if (computerSelection === "Paper") {
            return "Tie! Paper ties Paper"
        } else {
            return "You Lose! Scissors beats Paper"
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper"
        } if (computerSelection === "Scissors") {
            return "Tie! Scissors ties Scissors"
        } else {
            return "You Lose! Scissors beats Paper"
        }
    }
    
}