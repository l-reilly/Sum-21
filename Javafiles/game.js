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
let displayPoints = document.querySelector("#point-total")
let points = 100;
const losingDiv = document.querySelector("#losing");
const newGameButton = document.querySelector(".new-game")


function startGame() {
    startGameDiv.setAttribute('id', "start-game");
    addCardButton.removeAttribute('id');
    totalDiv.removeAttribute('id');
    getStartingCards();
    document.querySelector('.points-space').removeAttribute('id');
    displayPoints.textContent = checkPoints();
    total = randomCard1 + randomCard2;
   displayTotal.textContent = total;

} 
function addCardThree() {
    randomCard3 = cardValues[Math.floor(Math.random() * cardValues.length)]
    document.getElementById("cards-three").setAttribute('src', cardImages[(randomCard3-1)])
    total = randomCard1 + randomCard2 + randomCard3;
    displayTotal.textContent = total
    displayPoints.textContent = checkPoints();
    addCardButton.setAttribute('id', 'start-game')
    btnFourthCard.removeAttribute('id')
    runGame();
  }
  function addCardFour() {
      randomCard4 = cardValues[Math.floor(Math.random() * cardValues.length)]
      document.getElementById("cards-four").setAttribute('src', cardImages[(randomCard4-1)])
      total = randomCard1 + randomCard2 + randomCard3 + randomCard4
      displayTotal.textContent = total
      displayPoints.textContent = checkPoints();
      btnFourthCard.setAttribute('id', "addFourthCard")
      btnFifthCard.removeAttribute('id')
      runGame();

  }
  function addCardFive() {
      let randomCard5 = cardValues[Math.floor(Math.random() * cardValues.length)]
      document.getElementById("cards-five").setAttribute('src', cardImages[(randomCard5-1)])
      total = randomCard1 + randomCard2 + randomCard3 + randomCard4 + randomCard5
      displayTotal.textContent = total
      displayPoints.textContent = checkPoints();
      btnFifthCard.setAttribute('id', 'addFifthCard')
      document.querySelector('.new-game-btn').removeAttribute('id');
      runGame();
  }

  function checkPoints() {
    if (total === 19) {
        nextRoundBtn.removeAttribute('id')
        nextRoundBtn.addEventListener('click', points += 10)
    }
    else if (total === 20) {
        nextRoundBtn.removeAttribute('id')
        nextRoundBtn.addEventListener('click', points += 20)
    }
    else if (total === 21) {
        nextRoundBtn.removeAttribute('id')
        nextRoundBtn.addEventListener('click', points += 10)
        addCardButton.setAttribute('id', "game-starts")
        addCardFour.setAttribute('id', "addFourthCard")
        addCardFive.setAttribute('id', 'addFifthCard')
    }
    else if (total > 21) {
        points -= 100
    }
    return points
    }
   function runGame() {
       if (points <= 0) {
          btnFourthCard.setAttribute('id', 'addFourthCard');
          btnFifthCard.setAttribute('id', 'addFifthCard');
          document.querySelector('.new-game-btn').removeAttribute('id')
       }
   }
   function newGame() {
        window.location.reload();
    }


    



startGameButton.addEventListener('click', startGame);
addCardButton.addEventListener('click', addCardThree);
document.getElementById("addFourthCard").addEventListener('click', addCardFour);
document.getElementById("addFifthCard").addEventListener('click', addCardFive);
document.querySelector(".new-game-btn").addEventListener('click', newGame)
