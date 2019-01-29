
### JavaScript Card Game app

This project demonstrate that how advance features of javascript such as Prototypical Inheritance, Event Binding & propogation, and some drag and drop functionality.



#### JavaScript Prototypes and Dynamic Elements

**Prototype** - Prototype is like available to all objects as it is added to Objects by default. It allows us to create reusable objects.

**Document Fragment** - This allows us to build out divs **Off Dome** and append them to the body once they are all collected. Each time you modifies the DOM, it forces a redraw, hence using Document Fragment we are getting performance advantage here.
It saves us from DOM redrawing everytime.

The **DocumentFargment** interface represents a minimal document object that has no parent. A common use for documentFragment is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using NODE interface method such as appendChild() or insertBefore().
 
 **Clicked Event**
 
 ```
    this.cardContainer.onclick = function(e){
        console.log(e.target, e.currentTarget);
        console.log(e.target.className, e.currentTarget.classList);
    }

 ```


 **This**
 This is called at the time of Invocation. Global this is undefined in "use restrict".

 **Bind/Apply/Call**
 
 Bind  - "Call me later!"

 Apply - Execute me right now; accepts this + ARRAY
 
 Call  - Execute me right now; this + individual parameters


#### Psuedocode/sketch of the application

**Game**
    -   Info Section
    -   Deck
    -   Discard Piles
    -   Rules

**Deck**
    -   Cards
    -----------
    -   shuffle
    -   stack

**Cards**
    -   val
    -   suit
    ----------
    -   flip

**Discard Piles**
    - Holders
    ----------
    accept or reject





### Demo

[Demo Link](https://javascript-card-game.herokuapp.com/)