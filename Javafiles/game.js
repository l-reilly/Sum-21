//get elements
const startGameDiv = document.querySelector(".start-game");
const startGameButton = document.querySelector(".btn-start");
const addCardButton = document.querySelector(".add-card");
const totalDiv = document.querySelector(".total");
const cardTotal = document.querySelector(".cardsTotal");
const nextRoundBtn = document.querySelector(".nxt-rnd");
const btnFourthCard = document.querySelector(".addFourthCard")
const btnFifthCard = document.querySelector(".addFifthCard")
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
    document.getElementById("cards-three").setAttribute('src', cardImages[(randomCard3-1)])
    total = randomCard1 + randomCard2 + randomCard3;
    displayTotal.textContent = total
    checkPoints();
    addCardButton.setAttribute('id', 'start-game')
    btnFourthCard.removeAttribute('id')
  }
  function addCardFour() {
      randomCard4 = cardValues[Math.floor(Math.random() * cardValues.length)]
      document.getElementById("cards-four").setAttribute('src', cardImages[(randomCard4-1)])
      total = randomCard1 + randomCard2 + randomCard3 + randomCard4
      displayTotal.textContent = total
      checkPoints();
      btnFourthCard.setAttribute('id', "addFourthCard")
      btnFifthCard.removeAttribute('id')

  }
  function addCardFive() {
      let randomCard5 = cardValues[Math.floor(Math.random() * cardValues.length)]
      document.getElementById("cards-five").setAttribute('src', cardImages[(randomCard5-1)])
      total = randomCard1 + randomCard2 + randomCard3 + randomCard4 + randomCard5
      displayTotal.textContent = total
  }

  function checkPoints() {
    if (total === 19) {
        points += 10
        nextRoundBtn.removeAttribute("id")
    } 
    else if (total ===20) {
        points += 20
        nextRoundBtn.removeAttribute("id")
    }
    else if (total === 21) {
        points += 100
        nextRoundBtn.removeAttribute("id")
        addCardButton.setAttribute("id", "game-starts")
    }
    else if (total > 21) {
        points -= 100
        addCardButton.setAttribute("id", "game-starts")
    }
    return points
    }



startGameButton.addEventListener('click', startGame);
addCardButton.addEventListener('click', addCardThree);
//newGameButton.addEventListener('click', startNewGame);
document.getElementById("addFourthCard").addEventListener('click', addCardFour);
document.getElementById("addFifthCard").addEventListener('click', addCardFive);
