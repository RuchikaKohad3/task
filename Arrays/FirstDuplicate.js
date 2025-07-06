var arr = [1,2,3,3,4,4];
var flag=false;
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            console.log("Fist duplicate is: ", arr[i]);
            flag = true;
            break;
        }
    }
    if(flag){
            break;
        }
}