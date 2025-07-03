document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var fnameError = document.getElementById("fnameError");
    var lnameError = document.getElementById("lnameError");
    var mobileError = document.getElementById("mobileError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var formStatus = document.getElementById("formStatus");

    fnameError.textContent = "";
    lnameError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formStatus.textContent = "";

    var isValid = true;

    if (fname.length < 4) {
      fnameError.textContent = "First name must be at least 4 characters.";
      fnameError.style.color= "red"
      isValid = false;
    }

    if (lname === "") {
      lnameError.textContent = "Last name is required.";
      lnameError.style.color= "red"
      isValid = false;
    }

if (mobile.length !== 10) {
  mobileError.textContent = "Mobile must be exactly 10 digits (numbers only).";
  mobileError.style.color= "red"
  isValid = false;
}

    if (!(email.includes("@") && email.includes(".com"))) {
      emailError.textContent = "Email must contain '@' and end with '.com'.";
      emailError.style.color= "red"
      isValid = false;
    }

    var Errors = [];
    if (password.length < 8) {
      Errors.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      Errors.push("one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      Errors.push("one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      Errors.push("one number");
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      Errors.push("one special character");
    }

    if (Errors.length > 0) {
      passwordError.textContent = "Password must contain: " + Errors.join(", ") + ".";
      passwordError.style.color= "red"
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = "Form submitted successfully!";
      formStatus.style.color= "darkgreen"
    } else {
      formStatus.textContent = "Please fix the above errors.";
      formStatus.style.color= "red"
    }
  });

