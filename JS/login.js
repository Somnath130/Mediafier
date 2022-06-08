// var username2 = document.getElementById("logmail");
// var password2 = document.getElementById("loginpasswd");


// //Data authentication function

// var loginData = function myFunction() {
//   console.log("Inside the login Data");
//   fetch("http://localhost:56072/api/Login", {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       Username: username2.value,
//       Password: CryptoJS.MD5(password2.value).toString(),
//     }),
//   })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => showstorage(data))
//     .catch((error) => console.log(error));
// };

// function showstorage(data) {
//   if (data != null && data != undefined && data != "") {
//     sessionStorage.setItem("token", data.token);
//     sessionStorage.setItem("uid", data.id);
//   }
//   loc();
// }

// function loc() {
//   if (sessionStorage.getItem("token") != null) {
//     window.location.href = "/home2.html";
//   } else {
//     alert("Login Credentials are wrong");
//   }
// }

// window.onload = function () {
//   document.getElementById("logmail").value = "";
// };

// //Email address validation

// var userName = document.getElementById("logmail");
// var emailAddressValidation = function () {
//   emailAddressValue = userName.value.trim();
//   validEmailAddress = /^.{4,}$/;
//   emailAddressErr = document.getElementById("emailtag");
//   emailAddressErr.style.color = "red";
//   if (emailAddressValue === "") {
//     emailAddressErr.innerHTML = "Username is required";
//   } else if (!validEmailAddress.test(emailAddressValue)) {
//     document.getElementById("loginbtn").disabled = true;
//     emailAddressErr.innerHTML =
//       "Username must be atleast 4 characters long";
//   } else {
//     emailAddressErr.innerHTML = "";
//     return true;
//   }
// };

// userName.oninput = function () {
//   emailAddressValidation();
// };

// //password validation
// var passwordvalid = document.getElementById("loginpasswd");
// passwordvalid.setAttribute("type", "password");

// var passwordValidation = function () {
//   passwordValue = passwordvalid.value.trim();
//   validPassword =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   passwordErr = document.getElementById("pswdtag");

//   passwordErr.style.color = "red";

//   if (passwordValue == "") {
//     passwordErr.innerHTML = "Password is required";
//   } else if (!validPassword.test(passwordValue)) {
//     passwordErr.innerHTML =
//       "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
//   } else {
//     passwordErr.innerHTML = "";
//     return true;
//   }
// };

// passwordvalid.oninput = function () {
//   passwordValidation();
// };


var username2 = document.getElementById("logmail");
var password2 = document.getElementById("loginpasswd");
// var lg = document.getElementById("logbtn");

//swwetalert function call

// function loginSuccess() {
//   if (
//     document.getElementById("logmail").value === "" ||
//     document.getElementById("loginpasswd").value === ""
//   ) {
//     document.getElementById("loginbtn").disabled = true;
//     document.getElementById("loginalert").innerText = "Fill in your details";

//     setTimeout(() => {
//       const box = document.getElementById("loginalert");
//       box.style.display = "none";
//     }, 3000);

//     setTimeout(() => {
//       const box = document.getElementById("loginalert");
//       box.style.display = "normal";
//     }, 1000);

//     setTimeout(() => {
//       loginbtn.disabled = false;
//       //   console.log("Button Activated");
//     }, 500);
//   } else {
//     document.getElementById("loginbtn").disabled = false;
//     //   location.href = "./home.html";

//     (function () {
//       Swal.fire({
//         title: "<strong>Success</strong>",
//         icon: "success",
//         html: `Logged in successfull`,
//         confirmButtonText: `Go to drive`,
//       }).then((result) => {
//         if (result.value) {
// console.log("inside sweetalert");
//           loginData();
//           location.href = `home2.html`;
//         }
//       });
//     })();
//   }
// }

//Data authentication function

var loginData = function myFunction() {
  console.log("Inside the login Data");
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
    window.location.href = "/home2.html";
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
  let validEmailAddress = /^.{6,}$/;
  let emailAddressErr = document.getElementById("emailtag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Username is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Username must be 4 characters long";
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

