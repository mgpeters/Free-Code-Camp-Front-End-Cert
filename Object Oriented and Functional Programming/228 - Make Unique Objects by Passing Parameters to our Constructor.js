// This tsk was similar to the prior, except the function allows additional
// peramiters so we can create "different objects" with inputed values.


var Car = function(w, s, e) {
  this.wheels = w;
  this.seats = s;
  this.engines = e;
};

var myCar = new Car (3, 5, 6);
