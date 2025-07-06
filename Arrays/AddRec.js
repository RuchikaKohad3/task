function add(a, b) {
  if (b === 0) return a;
  return add(a + 1, b - 1);
}
console.log("Add 5 + 3:", add(5, 3));
