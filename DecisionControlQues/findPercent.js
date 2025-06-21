var mark1 = 45;
var mark2 = 55;
var mark3 = 60;
var mark4 = 50;
var mark5 = 40;

var total = mark1 + mark2 + mark3 + mark4 + mark5;
var percentage = total / 5;

if (percentage >= 50) {
    console.log("Pass with", percentage, "%");
} else {
    console.log("Fail with", percentage, "%");
}
