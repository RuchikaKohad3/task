var s1 = 70, s2 = 65, s3 = 55, s4 = 60, s5 = 75;
var total = s1 + s2 + s3 + s4 + s5;
var percentage = total / 5;

if (percentage >= 60) {
    console.log("First Division");
} else if (percentage >= 50&&percentage <= 59) {
    console.log("Second Division");
} else if (percentage >= 40&&percentage <= 49) {
    console.log("Third Division");
} else {
    console.log("Fail");
}
