var arr = [10, 5, 20, 8];
var max = arr[0];
var Smax = arr[0]
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > Smax && arr[i]!=max) Smax = arr[i];
}

console.log("Second Max:", Smax);
