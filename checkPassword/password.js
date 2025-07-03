var passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", checkPassword);

function checkPassword() {
  var pass = passwordInput.value;
  var length = pass.length;

  var strengthText = document.getElementById("length");
  var capitalText = document.getElementById("capital");
  var smallText = document.getElementById("small");
  var numberText = document.getElementById("number");
  var spcharText = document.getElementById("spchar");

  if (length === 0) {
    strengthText.style.visibility = "hidden";
    capitalText.style.visibility = "hidden";
    smallText.style.visibility = "hidden";
    numberText.style.visibility = "hidden";
    spcharText.style.visibility = "hidden";
    return; 
  }

  strengthText.style.visibility = "visible";
  capitalText.style.visibility = "visible";
  smallText.style.visibility = "visible";
  numberText.style.visibility = "visible";
  spcharText.style.visibility = "visible";

  if (length < 8) {
    strengthText.textContent = "• Strength: Weak";
    strengthText.style.color = "red";
  } else if (length >= 8 && length < 12) {
    strengthText.textContent = "• Strength: Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "• Strength: Strong";
    strengthText.style.color = "green";
  }

  var upper = /[A-Z]/;
  var lower = /[a-z]/;
  var number = /[0-9]/;
  var special = /[!@#$%^&*(),.?":{}|<>]/;

  capitalText.style.color = upper.test(pass) ? "darkgreen" : "red";
  smallText.style.color = lower.test(pass) ? "darkgreen" : "red";
  numberText.style.color = number.test(pass) ? "darkgreen" : "red";
  spcharText.style.color = special.test(pass) ? "darkgreen" : "red";
}
