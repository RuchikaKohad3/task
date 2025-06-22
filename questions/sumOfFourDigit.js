var num = 4321;
var sum =0;
for(var i =1; i<=4; i++){
    sum+=num%10;
    num=num/10;
}
console.log("sum:", sum)