var username2 = document.getElementById("logmail");
var password2 = document.getElementById("loginpasswd");

//Data authentication function

var loginData = function myFunction() {
  fetch("http://localhost:56072/api/Login", {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      Username: username2.value,
      Password: CryptoJS.MD5(password2.value).toString(),
    }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => showstorage(data))
    .catch((error) => console.log(error));
};

function showstorage(data) {
  if (data != null && data != undefined && data != "") {
    sessionStorage.setItem("Name", username2.value);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("uid", data.id);
  }
  loc();
}

function loc() {
  if (sessionStorage.getItem("token") != null) {
    window.location.href = "../Dashboard/home2.html";
  } else {
    alert("Login Credentials are wrong");
  }
}

window.onload = function () {
  document.getElementById("logmail").value = "";
};

//Username validation

var emailAddress = document.getElementById("logmail");
var emailAddressValidation = function () {
  let emailAddressValue = emailAddress.value.trim();
  let validEmailAddress = /^.{4,}$/;
  let emailAddressErr = document.getElementById("emailtag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Username is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML = "Username must be 4 characters long";
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
  let passwordValue = passwordvalid.value.trim();
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
