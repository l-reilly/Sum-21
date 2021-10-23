//get elements
const startGameDiv = document.querySelector(".start-game");
const startGameButton = document.querySelector(".btn-start");
const addCardButton = document.querySelector(".add-card")
const totalDiv = document.querySelector(".total")
const cardTotal = document.querySelector(".cardsTotal")
const nextRoundBtn = document.querySelector(".nxt-rnd")

function startGame() {
    startGameDiv.setAttribute('id', "start-game");
    addCardButton.removeAttribute('id');
    totalDiv.removeAttribute('id');
    getStartingCards();
   document.getElementById("game-total").textContent = getCardTotal();
} 


startGameButton.addEventListener('click', startGame);

