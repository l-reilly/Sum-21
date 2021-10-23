
//Remove cardValues
const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const cardImages = ["images/card 1.jpg", "images/card 2.jpg", "images/card 3.jpg", "images/card 4.jpg", "images/card 5.jpg", "images/card 6.jpg", "images/card 7.jpg", "images/card 8.jpg", "images/card 9.jpg", "images/card 10.jpg"]
let total;
let randomCard1;
let randomCard2;
let startingCards = [];
let randomCard3;
let randomCard4;


function getStartingCards() {
  // Use Math.Random to get a value between 1-10
  randomCard1 = cardValues[Math.floor(Math.random() * cardValues.length)];
  document.getElementById("cards-one").setAttribute('src', cardImages[(randomCard1-1)]);
  randomCard2 = cardValues[Math.floor(Math.random() * cardValues.length)];
  document.getElementById("cards-two").setAttribute('src', cardImages[(randomCard2-1)]);
}








