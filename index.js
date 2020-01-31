// Card template and set-up using classes
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
    bigbyWolf = new fableTales("Bigby Wolf", 9),
    snowWhite = new fableTales("Snow White", 8),
    jackPumpkinhead = new fableTales("Jack Pumpkinhead", 6),
    belleBeauty = new fableTales("Belle  Beauty", 7)
    cinderella = new fableTales("Cinderella", 3),
    princeCharming = new fableTales("Prince Charming",6),
    captainHook= new fableTales("Captain Hook", 4),
    wickedWitch = new fableTales("Wicked Witch", 5)
    evilQueen = new fableTales("Evil Queen", 8),
    rumplestiltskin = new fableTales("Rumplestiltskin", 10),
    robinHood = new fableTales("Robin Hood", 6),
    tinkerBell = new fableTales("Tinker Bell", 4),
    jekyllAndHyde = new fableTales("Jekyll and Hyde", 8),
    maidMarian = new fableTales("Maid Marian", 5),
    mulan = new fableTales("Mulan", 8),
    princeEric = new fableTales("Prince Eric", 3),
    victorFrankenstein = new fableTales("Victor Frankenstein", 4),
    peterPan = new fableTales("Peter Pan", 7),
    motherGothel = new fableTales("Mother Gothel", 6),
    queenElsa = new fableTales("Queen Elsa", 8),
    aladdin = new fableTales("Aladdin", 5),
    jiminyCricket = new fableTales("Jiminy Cricket", 2),
    huntsman = new fableTales("Huntsman", 6),
    pinocchio  = new fableTales("Pinocchio", 2),
    babaYaga = new fableTales("Baba Yaga", 8),
    ariel = new fableTales("Ariel", 5)
    sleepingBeauty = new fableTales("Sleeping beauty", 2),
    princessAnna = new fableTales("Princess Anna", 5),
    beast = new fableTales("Beast", 7),
    magicmirror = new fableTales("Magic Mirror", 10)

cardDeck = [
    bigbyWolf,
    snowWhite,
    jackPumpkinhead,
    belleBeauty,
    cinderella,
    princeCharming,
    captainHook,
    wickedWitch,
    evilQueen,
    rumplestiltskin,
    robinHood,
    tinkerBell,
    jekyllAndHyde,
    maidMarian,
    mulan,
    princeEric,
    victorFrankenstein,
    peterPan,
    motherGothel,
    queenElsa,
    aladdin,
    jiminyCricket,
    huntsman,
    pinocchio,
    babaYaga,
    ariel,
    sleepingBeauty,
    princessAnna,
    beast,
    magicmirror
]

let player1Cards = cardDeck.splice(0,15);
let player2Cards = cardDeck.splice(0,15);

const drawCard = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0].health} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0].health} and ${player2Cards.length} cards`)
    
    if (player1Cards[0].health > player2Cards[0].health) {
        pushFunc(1)
    }
    else if (player2Cards[0].health > player1Cards[0].health) {
        pushFunc(2)
    }
    else if (player1Cards.length == 7){
        console.log("PLAYER ONE WINS")
    }
    else if (player2Cards.length == 7){
        console.log("PLAYER TWO WINS")
    }
    else {
        pushFunc()
    } 
}

const pushFunc = (player) => {
    //Player 1 wins
    if (player == 1) {
        const holdingPile = player1Cards.shift();
            player2Cards.push(holdingPile);
            holdingPile == player2Cards.shift();
            player2Cards.push(holdingPile)
        // console.log(`Player 1 length: ${playerCards1.length}`);
        // console.log(`Player 2 length: ${playerCards2.length}`);
        console.log("player one won that round")
        drawCard(1)        
    }
    //player 2 wins
    else if (player == 2) {
        const holdingPile = player2Cards.shift();
        player1Cards.push(holdingPile);
        holdingPile == player1Cards.shift();
        player1Cards.push(holdingPile);
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

drawCard(1)






