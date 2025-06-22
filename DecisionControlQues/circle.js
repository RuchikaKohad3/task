var cx = 0, cy = 0, r = 5;
var x = 3, y = 4;

var distanceSquared = Math.pow(x - cx, 2) + Math.pow(y - cy, 2);
var radiusSquared = Math.pow(r, 2);

if (distanceSquared < radiusSquared) {
    console.log("Point is inside the circle");
} else if (distanceSquared === radiusSquared) {
    console.log("Point is on the circle");
} else {
    console.log("Point is outside the circle");
}
