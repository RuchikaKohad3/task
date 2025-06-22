var maritalStatus = "unmarried";
var gender = "male";
var age = 32;

if (maritalStatus === "married") {
    console.log("Insured");
} else if (gender === "male" && age > 30) {
    console.log("Insured");
} else if (gender === "female" && age > 25) {
    console.log("Insured");
} else {
    console.log("Not Insured");
}
