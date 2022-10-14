let playerScore = 0
let computerScore = 0

// Getting the player's choice by clicking a button 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice)
})

function getPlayerChoice(button) {
    console.log(this.id)
    playerChoice = this.id
    game(playerChoice)
}

// This function takes the user's input and plays playRound 5 times. First to 5 points wins
function game(playerChoice) {
    // Initialize scores for player and computer
    result = playRound(playerChoice, getComputerChoice())

    if (result == 1) {
        playerScore += 1
    }

    else if (result == -1) {
        computerScore += 1
    }
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
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
        console.log("You Win! You selected " + playerSelection + " and that beats " + computerSelection + "!")
        return 1
    }

    // Conditional case that results in a tie
    else if (playerSelection == computerSelection) {
        console.log("It's a Tie! You both selected " + playerSelection + "!")
        return 0
    }

    // All other options which the computer wins 
    else {
        console.log("You lose! The computer selected " + computerSelection + " and that beats " + playerSelection + "!")
        return -1
    }

}
function winnerCheck() {
    if (playerScore == 5) {
        console.log("You are the first to 5 points! You Win!")
    }
    else if (computerScore == 5) {
        console.log("The computer is the first to 5 points. You Lose :(")
    }
}




