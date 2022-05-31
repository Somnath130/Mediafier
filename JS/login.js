function loginsuccess() {
  if (
    document.getElementById("logmail").value === "" ||
    document.getElementById("loginpasswd").value === ""
  ) {
    document.getElementById("loginbtn").disabled = true;
    document.getElementById("loginalert").innerText = "Fill in your details";

    setTimeout(() => {
      const box = document.getElementById("loginalert");
      box.style.display = "none";
    }, 3000);
   
    setTimeout(() => {
      const box = document.getElementById("loginalert");
      box.style.display ="normal";
    }, 1000);

    setTimeout(() => {
      loginbtn.disabled = false;
      //   console.log("Button Activated");
    }, 500);
  } else {
    document.getElementById("loginbtn").disabled = false;
    //   location.href = "./home.html";

    (function () {
      Swal.fire({
        title: "<strong>Success</strong>",
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
          location.href = `home.html`;
        }
      });
    })();
  }
}

  var emailValue = document.getElementById("emailtag").innerHTML;

  var passwordValue = document.getElementById("pswdtag").innerHTML;

  if (emailValue != "" && passwordValue != "") {
    document.getElementById("loginbtn").disabled = true;

    // setTimeout(() => {
    //   loginbtn.disabled = false;
    //   //   console.log("Button Activated");
    // }, 5000);
  } 

window.onload = function () {
  document.getElementById("logmail").value = "";
};

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
  } else {
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
};
