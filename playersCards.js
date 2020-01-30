// Fable Tales Top Trump- basic if statement layout
let bigby_Wolf = ["Bigby Wolf", 9, 7, 7, 5];
let snow_White = ["Snow White", 3, 5, 8, 8];

if(bigby_Wolf[1] > snow_White[1]){
    console.log("Player 1 wins");
}
else if (bigby_Wolf[1] == snow_White[1]){
    console.log("Draw");
}
else {
    console.log("Player 2 wins");  
}


// Different card info 
const bigbyWolf = new fableTales("Bigby Wolf", 9, 7, 7, 5, 7)
const snowWhite = new fableTales("Snow White", 3, 5, 8, 8, 3)
const jackPumpkinhead = new fableTales("Jack Pumpkinhead", 2, 6, 4, 8, 4)
const lamiaBeauty = new fableTales("Lamia Beauty", 7, 6, 4, 6, 9)


// 2 player toggle logic
let player1 = true;
let player2;

const playerturn = () => {
    if(player1) {
        console.log(`its player 1 turn`);
        player1 = false 
    }
else  {
        console.log(`its player 2 turn`);
        player1 = true  
    }
}


// Development for card draw and code fgor switching cards between players 
player1Cards = [8,2,8,4]
player2Cards = [5,4,7,5]

const drawCard = (playerNum) => {

    console.log(`Player: ${playerNum} its your turn`)
    
    console.log(`player 1 has CARD: ${player1Cards[0]} and ${player1Cards.length} cards`)
    console.log(`player 2 has CARD: ${player2Cards[0]} and ${player2Cards.length} cards`)
    

    if (player1Cards[0] > player2Cards[0]) {
        pushFunc(1)
    }
    else if (player2Cards[0] > player1Cards[0]) {
        pushFunc(2)
    }
    else if (player1Cards.length == 6){
        console.log("PLAYER ONE WINS")
    }
    else if (player2Cards.length == 6){
        console.log("PLAYER 2 WINS")
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
        player1Cards.push(player2Cards[0])
        player1Cards.shift()
        console.log("player one won")
        drawCard(1)       
        
    }
    //player 2 wins
    else if (player == 2) {
        player2Cards.push(player1Cards[0])
        player1Cards.shift()
        console.log("player two won that round")
        player2Cards.push(player1Cards[0])
        player2Cards.shift()
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