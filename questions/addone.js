var num = 12391;
var result = 0;
var place = 1;

while (num> 0) {
    var digit = num % 10;          // Extract last digit
    digit = (digit + 1) % 10;      // Add 1, wrap around if 10
    result = digit * place + result;
    place *= 10;
    num =parseInt(num / 10);
    
}

console.log("New number:", result);
