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
​
class HarryPotter extends TopTrumps {
    constructor(name, health, magic, evilness, courage) {
        super(name, health)
        this._magic = magic;
        this._evilness = evilness;
        this._courage = courage;
    }
}
​
const deck1 = [
    abrar = new TopTrumps("Abrar", 90),
    mati = new TopTrumps("Mati", 90),
    carla = new TopTrumps("Carla", 100),
    georgia = new TopTrumps("Georgia", 110),
    ruben = new TopTrumps("Ruben", 61),
    gem = new TopTrumps("Gem", 95)
]
​
const deck2 = [
    sarah = new TopTrumps("Sarah", 60),
    clare = new TopTrumps("Clare", 60),
    heaben = new TopTrumps("Heaben", 3),
    dylan = new TopTrumps("Dylan", 78),
    emma = new TopTrumps("Emma", 96),
    peachy = new TopTrumps("Peachy", 120)
]
​
const HarryPotterDeck = [
    jasonPotter = new HarryPotter("Jason Potter", 100, 100, 0, 3000000),
    petePotter = new HarryPotter("Pete Potter", 10, 10, 0, 3)
]
​
if (deck1[0].health < deck2[0].health) {
    const holdingPile = deck1.shift();
    console.log(`Deck 1 length: ${deck1.length}`);
    console.log(`Deck 2 length: ${deck2.length}`);
    deck2.push(holdingPile);
    console.log(`Deck 2 length: ${deck2.length}`);
}
else if (deck2[0].health < deck1[0].health) {
    const holdingPile = deck2.shift();
    deck1.push(holdingPile);
    console.log(`Deck 1 length: ${deck1.length}`);
    console.log(`Deck 2 length: ${deck2.length}`);
}