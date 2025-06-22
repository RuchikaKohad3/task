var num = 4321;
var reverse = 0;

while (num > 0) {
    var digit = num % 10;              
    reverse = reverse * 10 + digit;    
    num =parseInt(num / 10);   
       
}

console.log("Reversed number:", reverse);
