for (let num = 1; num <= 500; num++) {
    var temp = num;
    var sum = 0;

    while (temp > 0) {
        var digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(num + " is an Armstrong number");
    }
}
