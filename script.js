

function computerPlay() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[getRandomInt(3)]
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}