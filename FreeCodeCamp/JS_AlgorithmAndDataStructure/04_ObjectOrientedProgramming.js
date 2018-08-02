04_OOprogramming

link:https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/

/************************************ property type *********************************/
/*
You have now seen two kinds of properties: own properties and prototype properties. 
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop);
  }else {
    prototypeProps.push(prop);
  }
}

/************************************* inheritance ********************************/

function Animal() { } // super type
Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() { } // child type

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; //otherwise, the constructor will be Animal

// Add new method to child type
Bird.prototype.fly = function() {
	return "Flying";
};
// Overrides parent type method 
Bird.prototype.eat = function() {
  return "peck peck peck";
};

/********************************** IIFE and Module ***********************************/
/*
1. mixin allows unrelated objects to use a collections of functions
2. IIFE: Immediately Invoked Function Expression
3. module: give IIFE a name, make it a variable, you will get a module
*/
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    }, //function 1 as property
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    } //function 2 as property
  } //end return
}) (); // The two parentheses cause the function to be immediately invoked
