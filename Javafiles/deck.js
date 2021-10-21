const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total;
let startingCards = [];


function getStartingCards(cardValues) {
  randomCard1 = cardValues[Math.floor(Math.random() * cardValues.length)];
  startingCards.push(randomCard1)
  randomCard2 = cardValues[Math.floor(Math.random() * cardValues.length)];
  startingCards.push(randomCard2)
  return startingCards;
}


function getCardTotal(startingCards) {
  total = startingCards.reduce((sum , value) => sum + value)
  return total

}



