var x1 = 1, y1 = 2;
var x2 = 2, y2 = 4;
var x3 = 3, y3 = 6;

var slope1 = (y2 - y1) / (x2 - x1);
var slope2 = (y3 - y2) / (x3 - x2);

if (slope1 === slope2) {
    console.log("Points are collinear");
} else {
    console.log("Points are not collinear");
}
