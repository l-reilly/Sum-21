# Sum-21
## Description
Sum 21 is a card game where, upon starting the game, the player is given a starting score of 100 points and presented with 2 cards with values between 1 and 10. 

They flip the cards and if the total value is 20, they can recieve 20 points, or choose to draw another card. 

If the added value is 19, they  can recieve 10 points or choose to draw another card. 

And if the value is lower than 19, they recieve 0 points and must draw another card.

If the player chooses not to add a 3rd card (in the case of drawing a 19 or 20), they can take their earned points and move onto another round.

But, if upon flipping the 3rd card the value surpasses 21, the player loses 100 points, and therefore loses the game. 

If, upon flipping the 3rd card the total value is equal to 21, the player receives 200 points and passes onto another round.

The player can keep adding cards until they reach, or pass 21.


Points Key (round 1) :
if Card Sum = 19, then Points Added = 10, making Total Points 110.
if Card Sum = 20, then Points Added = 20, making Total Points 120.
if Card Sum = 21, then Points Added = 100, making Total Points 200.
if Card Sum > 21, then Points Added = -100, making Total Points 0, and causing the player to lose the game. 

