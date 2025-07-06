function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(parseInt(n / 10));
}
console.log("Sum of digits of 1234:", sumDigits(1234)); 
