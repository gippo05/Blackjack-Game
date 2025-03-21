let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function startGame(){
    renderGame();
}

function renderGame(){
   cardsEl.textContent = "Cards: "
   for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
   }


    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

}

function newCard(){
    console.log("Drawing out a new card in the deck!");
    let card = 5;
    sum += card;
    cards.push(card);
    console.log(cards);

    renderGame();
}