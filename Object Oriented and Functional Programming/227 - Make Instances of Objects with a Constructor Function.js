// This FCC challange taks you with using a constructor function 
// and to call it with the "new" keyword in front of it.

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var myCar = new Car();
myCar["nickname"] = "Hey Dude";

console.log(myCar); //Checking to see if the new property is in myCar.