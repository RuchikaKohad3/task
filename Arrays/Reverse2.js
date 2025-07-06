var arr2 = [1, 2, 3, 4, 5];
var left = 0, right = arr2.length - 1;
while (left < right) {
  var temp = arr2[left];
  arr2[left] = arr2[right];
  arr2[right] = temp;
  left++;
  right--;
}
console.log("Reversed: ", arr2);
