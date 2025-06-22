var original = 1221;
var num = original;
var rev = 0;

while (num > 0) {
    var digit = num % 10;
    rev = rev * 10 + digit;
    num = parseInt(num / 10);
}

if (original === rev) {
    console.log(original + " is a Palindrome");
} else {
    console.log(original + " is NOT a Palindrome");
}
