var arr = [1, 2, 3, 2, 4, 2, 5, 1, 1];
var maxCount = 0;
var maxElement = arr[0];

for (var i = 0; i < arr.length; i++) {
  var count = 0;

  for (var j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  if (count > maxCount) {
    maxCount = count;
    maxElement = arr[i];
  }
}

console.log("Highest frequency element:", maxElement, "→ Count:", maxCount);
