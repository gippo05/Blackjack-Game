let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");

function startGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
        messageEl.textContent = message;
    } else {
        message = "You're out of the game!";
        messageEl.textContent = message;
        isAlive = false;
    }
}