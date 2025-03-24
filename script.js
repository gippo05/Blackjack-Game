let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// OBJECT
let player = {
    name: "Gian",
    chips: 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1;

    if(randomNumber === 1){
        return 11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }

    
}


function startGame(){
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];

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
    if (isAlive === true && hasBlackJack === false){
       let card = randomCard();
       sum += card;
       cards.push(card);
       console.log(cards);
       renderGame(); 
    }
    
}

