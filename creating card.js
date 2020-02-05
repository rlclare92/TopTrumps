class CardLayout { /* this is setting up the foundation base for all the cards.*/
    constructor(name, src){ /* these are our 3 main areas of our cards*/
        this.name = name;
        this.src = src;
        this.container = document.getElementById("container");

        let card = this.constructCard();
        this.container.appendChild(card);
    }

    constructCard() {
        let card = this.createCard();
        let title = this.createTitle();
        let image = this.createImage();
        let attributes = this.createAttList();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attributes);

        return card;  
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        return card;
    }

    createTitle() {
        let title = document.createElement('h1');
        let text = document.createTextNode(this.name);

        title.appendChild(text);

        title.classList.add('title');

        return title;
    }

    createImage() {
        let image = document.createElement('img');
        image.classList.add('image')

        image.src = this.src;
        
        return image;
    }

    createAttList() { /* this section is for listing the attribute that each card will have but with different vaules*/ 
        let container = document.createElement('div');
        container.classList.add('listContainer');
        
        let list = document.createElement('ul');
        
        container.appendChild(list) /* info below for the loop section */
            for (let i = 0; i < 5; i++){
                let listItem = document.createElement('li');

                let attributesText = document.createTextNode('attribute');
                
                listItem.appendChild(attributesText);
                list.appendChild(listItem);
            }
        
        //  Rather than writing out the below 100 times we can use a li list and a for loop to do the same thing.
        // let magic = document.createElement('magic');
        // let cunning = document.createElement('cunning');
        // let courage = document.createElement('courage');

        return container;
    }
    
}


// for (let i=0; i< arr.length; i++){
//     let card = new Card(arr[i]);
// }


// let cardDeckLayout = new Card('Prince Charming', <img src=./ ></img>);
// card.createAttList()


const attributeButton = document.getElementById("attributeButton");
const characterName = document.getElementById("characterName");

