
function game() {
    function computerPlay() {
        let computerChoice = ['Rock', 'Paper', 'Scissors'];
        let randomChoice = Math.floor(Math.random() * computerChoice.length)
        return computerChoice[randomChoice]
    }
    computerPlay();

    let computerSelection = computerPlay();
    const playerSelection = computerPlay();

    console.log('Player:' + playerSelection)
    console.log('Computer:' + computerSelection)

    function rpsRound(playerSelection, computerSelection) {

        if (playerSelection === "Rock") {
            if (computerSelection === "Scissors") {
                console.log("You Win! Rock beats Scissors")
            } if (computerSelection === "Rock") {
                console.log("Tie! Rock ties Rock")
            } else {
                console.log("You Lose! Paper beats Rock")
            }
        }
        if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                console.log("You Win! Paper beats Rock")
            } if (computerSelection === "Paper") {
                console.log("Tie! Paper ties Paper")
            } else {
                console.log("You Lose! Scissors beats Paper")
            }
        }
        if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                console.log("You Win! Scissors beats Paper")
            } if (computerSelection === "Scissors") {
                console.log("Tie! Scissors ties Scissors")
            } else {
                console.log("You Lose! Scissors beats Paper")
            }
        }

    }
    rpsRound(playerSelection, computerSelection);

}
game();