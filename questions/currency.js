var amount = 780; // in rupees
var hundreds = (amount / 100);
var fifties = (amount % 100) / 50;
var tens = (amount % 50) / 10;
console.log("100s:", hundreds);
console.log("50s:", fifties);
console.log("10s:", tens);
