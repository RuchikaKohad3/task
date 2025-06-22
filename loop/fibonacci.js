var a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
    var c = a + b;
    console.log(c);
    a = b;
    b = c;
}
