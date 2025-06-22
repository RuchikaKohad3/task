var ch = '#';
var code = ch.charCodeAt(0);

if (code >= 65 && code <= 90) {
    console.log("Capital Letter");
} else if (code >= 97 && code <= 122) {
    console.log("Small Letter");
} else if (code >= 48 && code <= 57) {
    console.log("Digit");
} else {
    console.log("Special Symbol");
}
