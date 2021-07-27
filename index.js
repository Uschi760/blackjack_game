let firstCard = 9
let secondCard = 3

let sum = firstCard + secondCard

if (sum < 21) {
	console.log("Do you want another card?")
} else if (sum === 21) {
	console.log("You are the winner - You've got Blackjack!")
} else if (sum > 21) {
	console.log("You are out of the game!")
}