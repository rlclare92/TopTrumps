let array = [
    "evilQueen",
    "rumplestiltskin",
    "robinHood",
    "tinkerBell",
    "jekyllAndHyde",
]

var shuffle = function (array) {
   var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array
}

shuffle(array)
console.log(array);
