//get elements
const startGameDiv = document.querySelector(".start-game");
const startGameButton = document.querySelector(".btn-start");
const addCardButton = document.querySelector(".add-card");
const totalDiv = document.querySelector(".total");
const cardTotal = document.querySelector(".cardsTotal");
const nextRoundBtn = document.querySelector(".nxt-rnd");
let displayTotal = document.getElementById("game-total");
let displayPoints = document.getElementById("point-total")
let points = 100;
const losingDiv = document.querySelector("#losing");
const newGameButton = document.querySelector(".new-game")


function startGame() {
    startGameDiv.setAttribute('id', "start-game");
    addCardButton.removeAttribute('id');
    totalDiv.removeAttribute('id');
    getStartingCards();
    document.querySelector('.points-space').removeAttribute('class');
    displayPoints.textContent = checkPoints();
   displayTotal.textContent = getCardTotal();
} 
function getCardTotal() {
    total = randomCard1 + randomCard2;
    return total;
  }
function addCardThree() {
    randomCard3 = cardValues[Math.floor(Math.random() * cardValues.length)]
    total = randomCard1 + randomCard2 + randomCard3;
    displayTotal.textContent = total
    checkPoints();
  }

  function checkPoints() {
    if (total === 19) {
        points += 10
    } 
    else if (total ===20) {
        points += 20
    }
    else if (total === 21) {
        points += 100
    }
    else if (total > 21) {
        points -= 100
    }
    return points
    }

    function updateGame() {
        if (points === 0) {
            losingDiv.removeAttribute('id')
            addCardButton.setAttribute('id', 'game-starts');
          }
    }


startGameButton.addEventListener('click', startGame);
addCardButton.addEventListener('click', addCardThree);
newGameButton.addEventListener('click', startNewGame)
