var arr = [10, 20, 30, 40];
var index = 2;

for (var i = index; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;

console.log("After deleting at index", index + ":", arr);
