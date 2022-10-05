
// A function to randomly select the computer's choice of Rock, Paper, or Scissor
function getComputerChoice() {
    let arrOfChoice = ["Rock", "Paper", "Scissor"]
    let randomIndex = Math.floor(Math.random() * arrOfChoice.length)
    let computerWeapon = arrOfChoice[randomIndex]
    return computerWeapon
}

// A function plays one round of the game 
function playRound(playerSelection, computerSelection) {

    // Converts the player's typed option to capitalize first letter
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1)

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

// This function takes the user's input and plays playRound 5 times. First to 5 points wins
function game() {
    // Initialize scores for player and computer
    playerScore = 0
    computerScore = 0

    // A loop that runs the game 5 times and calculates score
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt("Please select Rock, Paper, or Scissor!")
        result = playRound(playerChoice, getComputerChoice())

        if (result == 1) {
            playerScore += 1
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
        }
        else if (result == -1) {
            computerScore += 1
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
        }
    }

    // Condtional scenarios that dictate the winner
    if (playerScore == 5) {
        console.log("You are the first to 5 points! You Win!")
    }
    else if (computerScore == 5) {
        console.log("The computer is the first to 5 points. You Lose :(")
    }
}

game()
