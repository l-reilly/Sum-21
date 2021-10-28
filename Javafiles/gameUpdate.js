function playGame() {
function checkPoints(total) {
    displayPoints.textContent = checkPoints()
    if (total = 19) {
        points += 10
    } 
    else if (total = 20) {
        points +=20
    }
    else if (total = 21) {
        points += 21
    }
    
}
function checkButtons() {
    if(total === 19) {
        nextRoundBtn.removeAttribute('id')
    } 
    else if(total === 20) {
        nextRoundBtn.removeAttribute('id')
    }
    else if (total === 21) {
        addCardButton.setAttribute('id', "game-starts")
        btnFourthCard.setAttribute('id', "addFourthCard")
        btnFifthCard.setAttribute('id', 'addFifthCard')
    }
}
function checkTotal(total) {
    if (total === 19) {
        nextRoundBtn.removeAttribute('id')
    }
    else if(total === 20) {
        nextRound.removeAttribute('id')
    }
}

function checkBoth(total, points) {
    if(total > 21 && points > 100) {
        points -= 100;
        nextRoundBtn.removeAttribute('id')
    } else if (total > 21 && points < 100) {
        newGameButton.removeAttribute('id')
    }
}
}