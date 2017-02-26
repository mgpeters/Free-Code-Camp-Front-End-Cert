// This challange is to create private properties and private methods, which aren't accessible from outside the object.

// To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead 
// of creating it as a property of this. 

// This is useful for when we need to store information about an object but we want to control how it is used by outside code.

// For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify 
// it by accelerating or decelerating, so the speed changes in a controlled way?

// In the editor you can see an example of a Car constructor that implements this pattern.



var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

var gear;               //Private Property
  
this.getGear = function(){  //Public Method I
  return gear;
};

this.setGear = function(x){  //Public Method II
  gear = x;
};

};

var myCar = new Car();

var myBike = new Bike();
