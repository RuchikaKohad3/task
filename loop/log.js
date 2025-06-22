var n = 10;
var sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sum -= 1 / i;
    } else {
        sum += 1 / i;
    }
}

console.log("Ans: ",sum);
