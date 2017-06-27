/* Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them as
a two-dimensional array.

While this may not be the best solution, I did it on my own and am VERY proud of
it. Was stuck on this one for a while! */

 
function chunkArrayInGroups(arr, size) {
var temp = [];
var rounds = arr.length / size;
var count = 0; 
  for (var i = 0; i < rounds; i++){
    temp[i] = arr.slice(count, size + count);
    count  += size;
  }
 
  return temp;
}
 
chunkArrayInGroups(["a", "b", "c", "d"], 2);