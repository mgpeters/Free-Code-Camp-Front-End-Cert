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
  		innerRound = 0,
  		roundOuter = 0,
  		sourceArray = Object.keys(source);

		for(innerRound; innerRound < collection.length; innerRound += 1){


			if(sourceArray.length > 1){	
				if(collection[innerRound].hasOwnProperty(sourceArray[0])){
					if(source[sourceArray[0]] == collection[innerRound][sourceArray[0]]){
						if(source[sourceArray[1]] == collection[innerRound][sourceArray[1]]){
							arr.push(collection[innerRound]);
							console.log("Double Works");
						}
					}
				}
			}
			else if(source[sourceArray] == collection[innerRound][sourceArray]){
					arr.push(collection[innerRound]);
					console.log("Single Works");
					}
		}
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt", last: "Capulet"});


