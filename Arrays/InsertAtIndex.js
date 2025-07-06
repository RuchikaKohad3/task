var arr = [10, 20, 30, 40];
var index = 2;
var value = 25;

for (var i = arr.length; i > index; i--) {
  arr[i] = arr[i - 1];
}
arr[index] = value;

console.log("After inserting at index", index + ":", arr);
