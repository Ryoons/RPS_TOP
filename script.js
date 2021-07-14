// game function will be run on start of page load and holds
// the logic and computer choice 
function game() {
    
    // this function creates an array that holds the computers
    // choice of answers and chooses it at random when called.
    function computerPlay() {
        let computerChoice = ['Rock', 'Paper', 'Scissors'];
        let randomChoice = Math.floor(Math.random() * computerChoice.length)
        return computerChoice[randomChoice]
    }
    // this will run the computerPlay function because it always
    // starts on rock without it 
    computerPlay();

    // holds the variable for the computer
    let computerSelection = computerPlay();
    // was used in testing.
    const playerSelection = computerPlay();

    // used in testing to see if choices changed.
    console.log('Player:' + playerSelection)
    console.log('Computer:' + computerSelection)

    // the function plays one round of RPS
    // *** need to add points and round function ***
    function rpsRound(playerSelection, computerSelection) {

        if (playerSelection === "Rock") {
            if (computerSelection === "Scissors") {
                console.log("You Win! Rock beats Scissors")
            } else if (computerSelection === "Rock") {
                console.log("Tie! Rock ties Rock");
            } else {
                console.log("You Lose! Paper beats Rock");
            }
        }
        if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                console.log("You Win! Paper beats Rock")
            } else if (computerSelection === "Paper") {
                console.log("Tie! Paper ties Paper")
            } else {
                console.log("You Lose! Scissors beats Paper")
            }
        }
        if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                console.log("You Win! Scissors beats Paper")
            } else if (computerSelection === "Scissors") {
                console.log("Tie! Scissors ties Scissors")
            } else {
                console.log("You Lose! Rock beats Scissors")
            }
        }

    }
    rpsRound(playerSelection, computerSelection);
    
}
game();