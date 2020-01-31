let player1Cards 
let player2Cards

const playerCategoryChoice = () => {
    
}

playerCategoryChoice(1);

const drawCardHealth = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].health} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].health} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].health) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].health) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}

const drawCardStrength = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].strength} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].strength} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].strength) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].strength) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}

const drawCardCunning = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].cunning} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].cunning} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].cunning) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].cunning) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}

const drawCardIntelligence = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].intelligence} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].intelligence} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].intelligence) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].intelligence) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}



const drawCardMagical = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].magical} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].magical} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].magical) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].magical) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}

const drawCardCorruption = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].corruption} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].corruption} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].corruption) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].corruption) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}
