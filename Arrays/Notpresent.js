var arr1 = [1, 2, 3, 4, 5];
var arr2 = [2, 3, 1, 0, 5];
for (var i = 0; i < arr1.length; i++) {
  var found = false;
  for (var j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(arr1[i], "is not present in second array");
  }
}
