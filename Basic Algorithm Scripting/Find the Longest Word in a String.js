// The Free Code Camp Challange below if to return the length of the longest word in the provided sentence.

function findLongestWord(str) {
 
  var splits = str.split(" ");

	str = splits.sort(function (a, b){
  return b.length - a.length;
});
  
  return str[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");