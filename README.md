# Sum-21
## Description
Sum 21 is a card game where, upon starting the game, the player is given a starting score of 100 points and presented with 2 cards with values between 1 and 10. 

They flip the cards and if the total value is 20, they can recieve 20 points, or choose to draw another card. 

If the added value is 19, they  can recieve 10 points or choose to draw another card. 

And if the value is lower than 19, they recieve 0 points and must draw another card.

If the player chooses not to add a 3rd card (in the case of drawing a 19 or 20), they can take their earned points and move onto another round.

But, if upon flipping the 3rd card the value surpasses 21, the player loses 100 points, and therefore loses the game. 

If, upon flipping the 3rd card the total value is equal to 21, the player receives 200 points and passes onto another round.

The player can add up to 5 cards, or until they reach or pass 21.


Points Key (round 1) :
if Card Sum = 19, then Points Added = 10, making Total Points 110.
if Card Sum = 20, then Points Added = 20, making Total Points 120.
if Card Sum = 21, then Points Added = 100, making Total Points 200.
if Card Sum > 21, then Points Added = -100, making Total Points 0, and causing the player to lose the game. 

## MVP
- Game gives user 2 cards, and 100 points
- Game sums value of the cards to distribute points
- Game allows user to add cards or move on to the next round 
- Max 5 cards can be added
- User loses when points reach 0

## Backlog
- Images on cards
- "Flip" feature where the player flips over their cards
- Animation for points being added

## Data Structure
# index.html
# styles.css

# game.js
- generateStartingCards() {}
- sumCards() {}
- sumPoints() {}
- addCard() {}
- loseGame() {}

## States and States Transitions
- splashScreen
- 2 cards, add card or next round
- 3 cards, add card || next round, add 100 points || lose 100 points
- 4 cards, add card || next round, add 100 points || lose 100 points
- 5 cards, next round, add 100 points || lose 100 points
- loseGame

## Task
- index.html - build start screen with all cards/buttons visible
- index.html - build game screen
- styles.css
- game.js - make unnecesary cards and button invisible
- game.js - random numbers between 1-10 assigned to cards
- game.js - sum card values
- game.js - option to add card or move to new round
- game.js - sum points
- game.js - lose game

## Links 

### Trello 
[Link url](https://trello.com/b/QPjHHmSR/sum-21)

### Git 
[Link url](https://github.com/l-reilly/Sum-21/blob/main/README.md)

