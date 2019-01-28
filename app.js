//Starting the code with Semicolon if this ever be minified the it will not have any issue.
;(function(window){

    //**Game**
    var Game = function(el, options){
        
        this.el = document.getElementById(el);
        this.options = options;
        
        //Info Section
        this.info_div = document.createElement('div');
        this.info_div.id = "info_div";
        this.el.appendChild(this.info_div);

        //Deck
        this.deck_div = document.createElement('div');
        this.deck_div.id = "deck_div";
        this.el.appendChild(this.deck_div);
        this.gameDeck = new Deck(this.deck_div, options);
        this.gameDeck.buildDeck();

        //Discard Piles
        
        //Rules


    }

   
    
    
    

    //**Deck**
    var Deck = function(deck_div, option) {
        this.deckData = option.data;
        this.buildDeck = function() {
            deck_div.innerHtml = "";
            var parentFragment = document.createDocumentFragment();
            for (let index = this.deckData.length - 1; index >= 0; index--) {
                var card = new Cards();
                card.id = "card-"+index;
                card.data = this.deckData[index];
                card.buildCard(parentFragment);
            }
            deck_div.appendChild(parentFragment);
        }
    
        //Cards

        //shuffle
        
        //stack

    }


    

    //**Cards**
    var Cards = function() {
        
        this.id = "";
        this.data = "";
        
        this.cardBack = document.createElement('div');
        this.cardBack.className = 'card_back';
        
        this.cardFront = document.createElement('div');
        this.cardFront.className = 'card_front';
        
        this.cardContainer = document.createElement('div');
        this.cardContainer.className = 'card_container';
        
        this.buildCard = function(parentFragment) {
            

            var flipDiv = document.createElement('div'),
                frontValDiv = document.createElement('div'),
                backValDiv = document.createElement('div'),
                catDiv = document.createElement('div');
            flipDiv.className = 'flip';
            catDiv.className = 'cat_val';
            backValDiv.className = 'back_val';
            frontValDiv.className = 'front_val';

            frontValDiv.innerHTML = this.data.q;
            backValDiv.innerHTML = this.data.a;
            catDiv.innerHTML = this.data.category;

            this.cardFront.appendChild(catDiv);
            this.cardBack.appendChild(backValDiv);
            this.cardFront.appendChild(frontValDiv);

            flipDiv.appendChild(this.cardBack);
            flipDiv.appendChild(this.cardFront);

            this.cardContainer.id = this.id;
            this.cardContainer.appendChild(flipDiv);
            parentFragment.appendChild(this.cardContainer);

        }
        
        //val


        //suit
        
        
        //flip
    
    
    }

    
    
    

    //**Discard Piles**
    var DiscardPiles = function() {

        //Holders

        //accept or reject


    }
    
    window.Game = Game;
    
})(window);


