var n =5;
var arr = [1,2,3,4];
var total = n * (n + 1) / 2;
var sum=0;
for(var i=0; i<arr.length; i++){
    sum+=arr[i];
}
var missing = total-sum;
console.log("Missing No. :", missing);