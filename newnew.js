class TopTrumps {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

class fableTales extends TopTrumps {
    constructor(name, health, strength, cunning, intelligence, magical, corruption) {
        super(name, health)
        this.strength = strength;
        this.cunning = cunning;
        this.intelligence = intelligence;
        this.magical = magical;
        this.corruption = corruption;
    }
}
const player1Cards = [
    bigbyWolf = new fableTales("Bigby Wolf", 9, 1, 2, 3, 4, 5),
    snowWhite = new fableTales("Snow White", 8, 7, 6, 5, 4, 2),
    jackPumpkinhead = new fableTales("Jack Pumpkinhead", 6, 9, 2, 4, 3, 6),
    belleBeauty = new fableTales("Belle  Beauty", 7, 5, 7, 2, 8, 5),
    cinderella = new fableTales("Cinderella", 3, 4, 7, 2, 4, 7),
    princeCharming = new fableTales("Prince Charming", 6, 4, 9, 1, 6, 7),
    captainHook = new fableTales("Captain Hook", 4, 7, 2, 3, 8, 5),
    wickedWitch = new fableTales("Wicked Witch", 5, 9, 2, 5, 7, 5),
    evilQueen = new fableTales("Evil Queen", 8, 8, 2, 1, 5, 3),
    rumplestiltskin = new fableTales("Rumplestiltskin", 10, 3, 6, 8, 1, 4),
    robinHood = new fableTales("Robin Hood", 6, 5, 7, 1, 9, 3),
    tinkerBell = new fableTales("Tinker Bell", 4, 3, 7, 1, 8, 8),
    jekyllAndHyde = new fableTales("Jekyll and Hyde", 8, 3, 6, 1, 9, 4)
]
const player2Cards = [
    maidMarian = new fableTales("Maid Marian", 5, 6, 7, 8, 9, 10),
    mulan = new fableTales("Mulan", 8, 7, 6, 9, 3, 5),
    princeEric = new fableTales("Prince Eric", 3, 5, 7, 1, 4, 6),
    victorFrankenstein = new fableTales("Victor Frankenstein", 4, 8, 3, 5, 7, 8),
    peterPan = new fableTales("Peter Pan", 7, 4, 6, 12, 7, 4),
    motherGothel = new fableTales("Mother Gothel", 6, 9, 7, 6, 2, 7),
    queenElsa = new fableTales("Queen Elsa", 8, 6, 1, 4, 7, 2),
    aladdin = new fableTales("Aladdin", 5, 5, 1, 9, 7, 2),
    jiminyCricket = new fableTales("Jiminy Cricket", 2, 7, 5, 2, 5, 1),
    huntsman = new fableTales("Huntsman", 6, 2, 5, 9, 7, 8),
    pinocchio = new fableTales("Pinocchio", 2, 5, 7, 8, 3, 1),
    babaYaga = new fableTales("Baba Yaga", 8, 3, 6, 8, 1, 9),
    ariel = new fableTales("Ariel", 5, 2, 8, 3, 5, 7),
    sleepingBeauty = new fableTales("Sleeping beauty", 2, 9, 4, 6, 8, 3),
    princessAnna = new fableTales("Princess Anna", 5, 4, 7, 8, 1, 4),
    beast = new fableTales("Beast", 7, 6, 8, 3, 2, 7),
    magicmirror = new fableTales("Magic Mirror", 10, 1, 5, 9, 3, 6)
]

const drawCardAttribute = (attribute) => {
    console.log(`Player: playerX its your turn`)

    console.log(`player 1 has CARD: ${player1Cards[0][attribute]} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0][attribute]} and ${player2Cards.length} cards`)

    if (player1Cards[0][attribute] > player2Cards[0][attribute]) {
        pushFunc(1)
    }
    else if (player2Cards[0][attribute] > player1Cards[0][attribute]) {
        pushFunc(2)
    }
    else {
        pushFunc()
    }
}

const handleCard = (playerA, playerB) => {
    const holdingPile = playerB.shift();
    playerA.push(holdingPile);
    holdingPile == playerA.shift();
    playerA.push(holdingPile)
    // console.log(`Player 1 length: ${playerCards1.length}`);
    // console.log(`Player 2 length: ${playerCards2.length}`);
    // drawCard(1)  
}

const pushFunc = (player) => {
    //Player 1 wins
    if (player == 1) {
        handleCard(player1Cards, player2Cards)
        console.log("player one won that round")

    }
    //player 2 wins
    else if (player == 2) {
        handleCard(player2Cards, player1Cards)
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
    else if (choice === 2) {
        drawCardAttribute("strength")
    }
    else if (choice === 3) {
        drawCardAttribute("cunning")
    }
    else if (choice === 4) {
        drawCardAttribute("intelligence")
    }
    else if (choice === 5) {
        drawCardAttribute("magical")
    }
    else if (choice === 6) {
        drawCardAttribute("corruption")
    }
    else {
        console.log('select a category');
    }
}

playerCategoryChoice(1);
