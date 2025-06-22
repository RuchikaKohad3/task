var a = 24;
var b = 36;
var hcf = 1;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
        hcf = i;
    }
}
console.log("HCF is:", hcf);
