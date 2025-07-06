var arr = [1, 2, 3, 4, 5];
var n = arr.length;
var d = 2;

for (var i = 0; i < d; i++) {
  var last = arr[n - 1];
  for (var j = n - 1; j > 0; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = last;
}
console.log("Right rotated array by 2:", arr);
