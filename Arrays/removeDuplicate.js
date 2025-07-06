var arr = [1, 2, 3, 2, 4, 3, 5];
var result = [];
for (var i = 0; i < arr.length; i++) {
  var isDuplicate = false;
  for (var j = 0; j < result.length; j++) {
    if (arr[i] === result[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    result.push(arr[i]);
  }
}
console.log("Array without duplicates:", result);
