
//Remove cardValues
const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const cardImages = ["images/card 1.jpg", 2, 3, 4, 5, 6, 7, "images/card 8.jpg", 9, 10]
let total;
let randomCard1;
let randomCard2;
let startingCards = [];


function getStartingCards() {
  // Use Math.Random to get a value between 1-10
  randomCard1 = cardValues[Math.floor(Math.random() * cardValues.length)];
  document.getElementById("cards-one").setAttribute('img', cardImages[(randomCard1-1)]);
  //Put tag on visible ( same as pizza builder)
  randomCard2 = cardValues[Math.floor(Math.random() * cardValues.length)];
  document.getElementById("cards-two").setAttribute('img', cardImages[(randomCard2-1)]);
}


function getCardTotal() {
  total = randomCard1 + randomCard2;
  return total;

}



