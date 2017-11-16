/* 

Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns 
an array of all objects that have matching property and value pairs (second argument). 
ach property and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the 
third object from the array (the first argument), because it contains the property and its value, that was passed 
on as the second argument.

*/

function whatIsInAName(collection, source) {
  // What's in a name?
	var arr = [],
  // Only change code below this line
  		round = 0,
  		sourceArray = Object.keys(source);
console.log(collection[2]);
console.log(source);
console.log(collection[round].hasOwnProperty(Object.keys(source)));
console.log(collection[round][Object.keys(source)]);
	
	for(round; round < collection.length; round += 1){
		console.log(Boolean(Object.keys(source) == collection[round][Object.keys(source)]));
		if(collection[round].hasOwnProperty(Object.keys(source))){
			if(Object.keys(source) == collection[round][Object.keys(source)]){
				arr.push(collection[round]);
				console.log("Works");
			}
		} // Works!!
	}



  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"});


