// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  
  var split = str.toLowerCase().split(" ");

	for (var i = 0; i < split.length; i++){
		
		split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);

    }

  
return split.join(" ");
}

titleCase("I'm a little tea pot");