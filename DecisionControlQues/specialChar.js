var ch = '*';
var code = ch.charCodeAt(0);

//Lowercase alphabet
if (code >= 97 && code <= 122) {
    console.log("Lowercase Alphabet");
} else {
    console.log("Not a Lowercase Alphabet");
}

//Special Symbol
if ((code >= 0 && code <= 47) || (code >= 58 && code <= 64) ||
    (code >= 91 && code <= 96) || (code >= 123 && code <= 127)) {
    console.log("Special Symbol");
} else {
    console.log("Not a Special Symbol");
}
