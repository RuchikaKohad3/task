var arr = [1, 2, 3, 4, 2];
var value = 2;
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== value) {
    newArr.push(arr[i]);
  }
}
console.log("After deleting value", value + ":", newArr);
