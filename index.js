// Fable Tales Top Trump 

// let bigby_Wolf = ["Bigby Wolf", 9, 7, 7, 5];
// let snow_White = ["Snow White", 3, 5, 8, 8];

// if(bigby_Wolf[1] > snow_White[1]){
//     console.log("Player 1 wins");
// }
// else if (bigby_Wolf[1] == snow_White[1]){
//     console.log("Draw");
// }
// else {
//     console.log("Player 2 wins");
    
// }
//  Card array for transfering cards from 1 player to another
let player1Cards = [100, 2234927219128, 30909] 
let player2Cards = [41111, 52131, 632131]

const drawCard = (playerNum) => {

    alert(`Player: ${playerNum} its your turn`)
    
    alert(`player 1 has CARD: ${player1Cards[0]} and ${player1Cards.length} cards`)
    alert(`player 2 has CARD: ${player2Cards[0]} and ${player2Cards.length} cards`)
    

    if (player1Cards[0] > player2Cards[0]) {
        pushFunc(1)
    }
    else if (player2Cards[0] > player1Cards[0]) {
        pushFunc(2)
    }
    else if (player1Cards.length == 6){
        alert("PLAYER ONE WINS")
    }
    else if (player2Cards.length == 6){
        alert("PLAYER 2 WINS")
    }
    else {
        pushFunc()
    } 
}

const pushFunc = (player) => {
    //Player 1 wins
    if (player == 1) {
        player1Cards.push(player2Cards[0])
        player2Cards.shift()
        alert("player one won")
        drawCard(1)
        
    }
    //player 2 wins
    else if (player == 2) {
        player2Cards.push(player1Cards[0])
        player1Cards.shift()
        alert("player two won that round")
        drawCard(2)
    }
    else {
        player2Cards.push(player2Cards[0])
        player1Cards.push(player1Cards[0])
        player2Cards.shift()
        player1Cards.shift()
    }   
}

drawCard(1)




// Card template and set-up
class fableTales {
    constructor(name, strength, cunning, intelligence, magical, corruption){
    this._name = name;
    this._strength = strength;
    this._cunning = cunning;
    this._intelligence = intelligence;
    this._magical = magical; 
    this._corruption = corruption; 

    }
    // get name(){
    //     return this._name
    // }
    // get strength (){
    //     return this._strength
    // }
    // get cunning (){
    //     return this._cunning
    // }
    // get intelligence(){
    //     return this._intelligence
    // }
    // get magical(){
    //     return this._magical
    // }
        // get corruption(){
    //     return this._corruption
    // }

}

const bigbyWolf = new fableTales("Bigby Wolf", 9, 7, 7, 5, 7)
const snowWhite = new fableTales("Snow White", 3, 5, 8, 8, 3)
const jackPumpkinhead = new fableTales("Jack Pumpkinhead", 2, 6, 4, 8, 4)
const lamiaBeauty = new fableTales("Lamia Beauty", 7, 6, 4, 6, 9)

console.log(bigbyWolf);
console.log(snowWhite);
console.log(jackPumpkinhead);
console.log(lamiaBeauty);

player1Cards = 
player2Cards








