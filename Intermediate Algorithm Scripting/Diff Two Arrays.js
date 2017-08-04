function diffArray(arr1, arr2) {

  var newArr= [], x = 0, y = 0;
  for (x; x < arr2.length; x += 1){
	console.log(arr1.indexOf(arr2[x]));
	if (arr1.indexOf(arr2[x]) === -1) {
        newArr.push(arr2[x]);
        }
    
  }
  for (y; y < arr1.length; y += 1){
	console.log(arr2.indexOf(arr1[y]));
    if (arr2.indexOf(arr1[y]) === -1) {
        newArr.push(arr1[y]);
        }
    
  }
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);