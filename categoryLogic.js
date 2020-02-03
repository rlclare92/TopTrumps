// let player1Cards;
// let player2Cards;
// let playerNum;

class TopTrumps {
    constructor(name, health) {
        this._name = name;
        this._health = health;
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
}

class fableTales extends TopTrumps {
    constructor(name, health, strength, cunning, intelligence, magical, corruption){
    super(name, health)
    this._strength = strength;
    this._cunning = cunning;
    this._intelligence = intelligence;
    this._magical = magical; 
    this._corruption = corruption; 
    }
}
    const player1Cards = [
    bigbyWolf = new fableTales("Bigby Wolf", 9, 1, 2, 3, 4, 5),
    snowWhite = new fableTales("Snow White", 8, 7, 6, 5, 4, 2),
    jackPumpkinhead = new fableTales("Jack Pumpkinhead", 6, 9, 2, 4, 3, 6),
    belleBeauty = new fableTales("Belle  Beauty", 7, 5, 7, 2, 8, 5),
    cinderella = new fableTales("Cinderella", 3, 4, 7, 2, 4, 7),
    princeCharming = new fableTales("Prince Charming",6, 4, 9, 1, 6, 7),
    captainHook= new fableTales("Captain Hook", 4, 7, 2, 3, 8, 5),
    wickedWitch = new fableTales("Wicked Witch", 5, 9, 2, 5, 7, 5),
    evilQueen = new fableTales("Evil Queen", 8, 8, 2, 1, 5, 3),
    rumplestiltskin = new fableTales("Rumplestiltskin", 10, 3, 6, 8, 1, 4),
    robinHood = new fableTales("Robin Hood", 6, 5, 7, 1, 9, 3),
    tinkerBell = new fableTales("Tinker Bell", 4, 3, 7, 1, 8, 8),
    jekyllAndHyde = new fableTales("Jekyll and Hyde", 8, 3, 6, 1, 9, 4)
]
    const player2Cards = [
    maidMarian = new fableTales("Maid Marian", 5, 6, 7, 8, 9, 10 ),
    mulan = new fableTales("Mulan", 8, 7, 6, 9, 3, 5),
    princeEric = new fableTales("Prince Eric", 3, 5, 7, 1, 4, 6),
    victorFrankenstein = new fableTales("Victor Frankenstein", 4, 8, 3, 5, 7, 8),
    peterPan = new fableTales("Peter Pan", 7, 4, 6, 12, 7, 4),
    motherGothel = new fableTales("Mother Gothel", 6, 9, 7, 6, 2, 7),
    queenElsa = new fableTales("Queen Elsa", 8, 6, 1, 4, 7, 2),
    aladdin = new fableTales("Aladdin", 5, 5, 1, 9, 7, 2),
    jiminyCricket = new fableTales("Jiminy Cricket", 2, 7, 5, 2, 5, 1),
    huntsman = new fableTales("Huntsman", 6, 2, 5, 9, 7, 8),
    pinocchio  = new fableTales("Pinocchio", 2, 5, 7, 8, 3, 1),
    babaYaga = new fableTales("Baba Yaga", 8, 3, 6, 8, 1, 9),
    ariel = new fableTales("Ariel", 5, 2, 8, 3, 5, 7),
    sleepingBeauty = new fableTales("Sleeping beauty", 2, 9, 4, 6, 8, 3),
    princessAnna = new fableTales("Princess Anna", 5, 4, 7, 8, 1, 4),
    beast = new fableTales("Beast", 7, 6, 8, 3, 2, 7),
    magicmirror = new fableTales("Magic Mirror", 10, 1, 5, 9, 3, 6)
    ]


//  player1Cards = cardDeck.splice(0,15);
//  player2Cards = cardDeck.splice(0,15);

const drawCardAttribute = ( attribute) => {
    console.log(`Player: playerX its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0][attribute]} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0][attribute]} and ${player2Cards.length} cards`)
    
    if (player1Cards[0][attribute] > player2Cards[0][attribute]) {
        log
        pushFunc(1)
    }
    else if (player2Cards[0][attribute] > player1Cards[0][attribute]) {
        pushFunc(2)
    }
    else {
        pushFunc()
    } 
}


// const drawCardHealth = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[0].health} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[0].health} and ${player2Cards.length} cards`)
    
//     if (player1Cards[0].health > player2Cards[0].health) {
//         pushFunc(1)
//     }
//     else if (player2Cards[0].health > player1Cards[0].health) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

// const drawCardStrength = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[1].strength} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[1].strength} and ${player2Cards.length} cards`)
    
//     if (player1Cards[1].health > player2Cards[1].strength) {
//         pushFunc(1)
//     }
//     else if (player2Cards[1].health > player1Cards[1].strength) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

// const drawCardCunning = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[2].cunning} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[2].cunning} and ${player2Cards.length} cards`)
    
//     if (player1Cards[2].health > player2Cards[2].cunning) {
//         pushFunc(1)
//     }
//     else if (player2Cards[2].health > player1Cards[2].cunning) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

// const drawCardIntelligence = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[3].intelligence} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[3].intelligence} and ${player2Cards.length} cards`)
    
//     if (player1Cards[3].health > player2Cards[3].intelligence) {
//         pushFunc(1)
//     }
//     else if (player2Cards[3].health > player1Cards[3].intelligence) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

// const drawCardMagical = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[4].magical} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[4].magical} and ${player2Cards.length} cards`)
    
//     if (player1Cards[4].health > player2Cards[4].magical) {
//         pushFunc(1)
//     }
//     else if (player2Cards[4].health > player1Cards[4].magical) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

// const drawCardCorruption = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
//     console.log(`player 1 has CARD: ${player1Cards[5].corruption} and ${player1Cards.length} cards`)
//     console.log(`player 2 has CARD: ${player2Cards[5].corruption} and ${player2Cards.length} cards`)
    
//     if (player1Cards[5].health > player2Cards[5].corruption) {
//         pushFunc(1)
//     }
//     else if (player2Cards[5].health > player1Cards[5].corruption) {
//         pushFunc(2)
//     }
//     else {
//         pushFunc()
//     } 
// }

const pushFunc = (player) => {
    //Player 1 wins
    if (player == 1) {
        const holdingPile = player2Cards.shift();
            player1Cards.push(holdingPile);
            holdingPile == player1Cards.shift();
            player1Cards.push(holdingPile)
        // console.log(`Player 1 length: ${playerCards1.length}`);
        // console.log(`Player 2 length: ${playerCards2.length}`);
        console.log("player one won that round")
        // drawCard(1)        
    }
    //player 2 wins
    else if (player == 2) {
        const holdingPile = player1Cards.shift();
        player2Cards.push(holdingPile);
        holdingPile == player2Cards.shift();
        player2Cards.push(holdingPile);
        // console.log(`Player 1 length: ${playerCards1.length}`);
        // console.log(`Player 2 length: ${playerCards2.length}`);
        console.log("player two won that round")
    }
    else {
        player2Cards.shift()
        player1Cards.shift()
        player2Cards.push(player2Cards[0])
        player1Cards.push(player1Cards[0]) 
    }   
}

const playerCategoryChoice = (choice) => {
    if (choice === 1) {
        drawCardAttribute("health")
}
    else if (choice === 2){
        drawCardAttribute("strength")
}
    else if (choice === 3){
        drawCardAttribute("cunning")
}
    else if (choice === 4){
        drawCardAttribute("intelligence")
}
    else if (choice === 5){
       drawCardAttribute("magical")
}
    else if (choice === 6){
        drawCardAttribute("corruption")
}
    else {
        console.log('select a category');
}
}

playerCategoryChoice(3);
// const playerCategoryChoice = () => {
//     switch (playerNum) {
//         case 'health':
//             drawCardHealth(0)
//         break;
//         case 'Strength':
//             drawCardStrength(1)
//         break;
//         case 'cunning':
//             drawCardCunning(2)
//         break;
//         case 'Intelligence':
//             drawCardIntelligence(3)
//         break;
//         case 'Magical':
//             drawCardMagical(4)
//         break;
//         case 'Corruption':
//             drawCardCorruption(5)
//     }
// }

// playerCategoryChoice(3);

// const pushFunc = (player) => {
    //Player 1 wins
    // if (player == 1) {
    //     const holdingPile = player1Cards.shift();
    //         player2Cards.push(holdingPile);
    //         holdingPile == player2Cards.shift();
    //         player2Cards.push(holdingPile)
        // console.log(`Player 1 length: ${playerCards1.length}`);
        // console.log(`Player 2 length: ${playerCards2.length}`);
    //     console.log("player one won that round")
    //     drawCard(1)        
    // }
    //player 2 wins
    // else if (player == 2) {
    //     const holdingPile = player2Cards.shift();
    //     player1Cards.push(holdingPile);
    //     holdingPile == player1Cards.shift();
    //     player1Cards.push(holdingPile);
        // console.log(`Player 1 length: ${playerCards1.length}`);
        // console.log(`Player 2 length: ${playerCards2.length}`);
//         console.log("player two won that round")
//     }
//     else {
//         player2Cards.shift()
//         player1Cards.shift()
//         player2Cards.push(player2Cards[0])
//         player1Cards.push(player1Cards[0]) 
//     }   
// }

