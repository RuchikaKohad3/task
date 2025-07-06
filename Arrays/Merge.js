var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merged = [];
var k = 0; 

for (var i = 0; i < arr1.length; i++) {
  merged[k] = arr1[i];
  k++;
}

for (var i = 0; i < arr2.length; i++) {
  merged[k] = arr2[i];
  k++;
}

console.log("Merged array:", merged);
