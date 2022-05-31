
function loginsuccess()
{
Swal.fire({
  title:"<strong>Success</strong>",
  icon: "success",
  html: `Logged in successfull`,
//   showCloseButton: true,
//   showCancelButton: true,
//   focusConfirm: false,
//   reverseButtons: true,
//   focusCancel: true,
  confirmButtonText: `Go to drive`,
}).then((result) => {
  if (result.value) {
    window.location.href = `home.html`;
  }
});
} 

//Email address validation

var emailAddress = document.getElementById("logmail");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("emailtag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email Address must be in valid format with @ symbol";
  } 
  else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

logmail.oninput = function () {
  emailAddressValidation();
};


//password validation
var passwordvalid = document.getElementById("loginpasswd");
passwordvalid.setAttribute("type", "password");

var passwordValidation = function () {
  passwordValue = passwordvalid.value.trim();
  validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  passwordErr = document.getElementById("pswdtag");

  passwordErr.style.color = "red";

  if (passwordValue == "") {
    passwordErr.innerHTML = "Password is required";
  } else if (!validPassword.test(passwordValue)) {
    passwordErr.innerHTML =
      "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
  } else {
    passwordErr.innerHTML = "";
    return true;
  }
};

passwordvalid.oninput = function () {
  passwordValidation();
 //  confirmPasswordValidation();
};
