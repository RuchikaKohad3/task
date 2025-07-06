var arr = [1, 2, 3, 4, 5];
var d = 2;
var n = arr.length;

for (var i = 0; i < d; i++) {
  var first = arr[0];
  for (var j = 0; j < n - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[n - 1] = first;
}

console.log("Left rotated by 2:", arr);
