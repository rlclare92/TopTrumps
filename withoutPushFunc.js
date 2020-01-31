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

const player1Cards = [
    bigbyWolf = new fableTales("Bigby Wolf", 9, 4 ,6, 8, 7),
    snowWhite = new fableTales("Snow White", 8, 7 ,2, 9, 5),
    jackPumpkinhead = new fableTales("Jack Pumpkinhead", 6, 4 ,6, 7, 6),
    lamiaBeauty = new fableTales("Lamia Beauty", 7, 3, 7, 1, 0)
]

const player2Cards = [
    Cinderella = new fableTales("Cinderella", 3, 6, 2, 3, 1),
    princeCharming = new fableTales("Prince Charming", 6, 6 ,7, 1, 5),
    captainHook= new fableTales("Captain Hook", 4, 2, 4, 9, 5),
    wickedWitch = new fableTales("Wicked Witch", 5, 2, 7, 9, 1)
]

// const drawCard = (playerNum) => {

//     console.log(`Player: ${playerNum} its your turn`)
    
    // console.log(`player 1 has CARD: ${player1Cards[0]._health} and ${player1Cards.length} cards`)
    // console.log(`player 2 has CARD: ${player2Cards[0]._health} and ${player2Cards.length} cards`)
    
//     if (player1Cards[0].health > player2Cards[0]._health) {
//         pushFunc(1)
//     }
//     else if (player2Cards[0].health > player1Cards[0]._health) {
//         pushFunc(2)
//     }
//     else if (player1Cards.length == 7){
//         console.log("PLAYER ONE WINS")
//     }
//     else if (player2Cards.length == 7){
//         console.log("PLAYER TWO WINS")
//     }
//     else {
//         pushFunc()
//     } 
// }

const pushFunc = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)

console.log(`player 1 has CARD: ${player1Cards[0]._health} and ${player1Cards.length} cards`)
console.log(`player 2 has CARD: ${player2Cards[0]._health} and ${player2Cards.length} cards`)

if (player1Cards[0].health < player2Cards[0].health) {
    const holdingPile = player1Cards.shift();
    console.log(`player 1 length: ${player1Cards.length}`);
    console.log(`player 2 length: ${player2Cards.length}`);
    player2Cards.push(holdingPile);
    console.log(`player 2 length: ${player2Cards.length}`);
    console.log("player two won that round")
    pushFunc(1)
}
else if (player1Cards[0].health > player2Cards[0].health) {
    const holdingPile = player2Cards.shift();
    player1Cards.push(holdingPile);
    console.log(`player 1 length: ${player1Cards.length}`);
    console.log(`player 2 length: ${player2Cards.length}`);
    console.log("player one won that round")
    pushFunc(2)
    }
}

pushFunc(1)

