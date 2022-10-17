const outcome = document.querySelector('.result')

// Used to display respective scores on page
const playerScoreDisplay = document.querySelector('.playerscorenumber')
const computerScoreDisplay = document.querySelector('.computerscorenumber')


let playerScore = 0
let computerScore = 0

// Getting the player's choice by clicking a button 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice)
})

// Passing the player's choice to game()
function getPlayerChoice(button) {
    console.log(this.id)
    playerChoice = this.id
    game(playerChoice)
}

// This function takes the user's input and plays playRound 5 times. First to 5 points wins
function game(playerChoice) {
    // Getting the reult of 1 match by passing player's choice and computer choice
    result = playRound(playerChoice, getComputerChoice())
    playerScoreDisplay.textContent = `${playerScore}`
    computerScoreDisplay.textContent = `${computerScore}`

    if (result == 1) {
        playerScore += 1
        playerScoreDisplay.textContent = `${playerScore}`
    }

    else if (result == -1) {
        computerScore += 1
        computerScoreDisplay.textContent = `${computerScore}`
    }

    // Check to see if there is a winner after each round
    winnerCheck()
}

// A function to randomly select the computer's choice of Rock, Paper, or Scissor
function getComputerChoice() {
    let arrOfChoice = ["Rock", "Paper", "Scissor"]
    let randomIndex = Math.floor(Math.random() * arrOfChoice.length)
    let computerWeapon = arrOfChoice[randomIndex]
    return computerWeapon
}

// A function plays one round of the game 
function playRound(playerSelection, computerSelection) {

    // Conditional case where the player will win the round
    if (playerSelection === "Rock" && computerSelection === "Scissor" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissor" && computerSelection === "Paper") {
        outcome.textContent = `You win! You selected ${playerSelection} and that beats ${computerSelection}`
        return 1
    }


    // Conditional case that results in a tie
    else if (playerSelection == computerSelection) {
        outcome.textContent = `It's a tie! You both selected ${playerSelection}!`
        return 0
    }

    // All other options which the computer wins 
    else {
        outcome.textContent = `You lose! My professor selected ${computerSelection} and that beats ${playerSelection}`
        return -1
    }

}
// Checking the winner. If one person wins, it resets the score after the player hits a button
function winnerCheck() {
    if (playerScore == 5) {
        outcome.textContent = `You are the first to 5 points! You win!`
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore == 5) {
        outcome.textContent = `The professor is the first to 5 points. You lose!`
        playerScore = 0
        computerScore = 0
    }
}




