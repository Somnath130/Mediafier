function signupsuccess() {
  Swal.fire({
    title: "<strong>Success</strong>",
    icon: "success",
    html: `Account created successfully`,
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


//Full name validation
var fValid = document.getElementById("signinput");

var firstNameValidation = function () {
  let firstNameValue = fValid.value.trim();
  let validFirstName = /^[A-Za-z]+$/;
  let firstNameErr = document.getElementById("fullnametag");
  firstNameErr.style.color = "red";

  if (firstNameValue == "") {
    firstNameErr.innerHTML = "Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML =
      "Name must be only string without white spaces";
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};

fValid.oninput = function () {
  firstNameValidation();
};



//email validation
var emailAddress = document.getElementById("signemail");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("signmailtag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email Address must be in valid formate with @ symbol";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

signemail.oninput = function () {
  emailAddressValidation();
};


//password validation
var passwordvalid = document.getElementById("signpass");
passwordvalid.setAttribute("type", "password");

var passwordValidation = function () {
  passwordValue = passwordvalid.value.trim();
  validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  passwordErr = document.getElementById("passwdtag");

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


var confirmPassword = document.getElementById("consignpass");

confirmPassword.setAttribute("type", "password");

var confirmPasswordValidation = function () {
  confirmPasswordValue = confirmPassword.value.trim();

  confirmPasswordErr = document.getElementById("confirmpasstag");

  confirmPasswordErr.style.color = "red";
  if (confirmPasswordValue == "") {
    confirmPasswordErr.innerHTML = "Confirm Password is required";
  } else if (confirmPasswordValue != passwordvalid.value) {
    confirmPasswordErr.innerHTML = "Password Mismatch";
  } else {
    confirmPasswordErr.innerHTML = "";
    return true;
  }
};

confirmPassword.oninput = function () {
  confirmPasswordValidation();
};