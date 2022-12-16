var loginForm = document.getElementById("login");
var registerForm = document.getElementById("Register");
var btn = document.getElementById("btn");
var registerBtn = document.getElementById("register-btn");
var loginBtn = document.getElementById("login-btn");

registerBtn.addEventListener("click", function (e) {
    // e.preventDefault();
    // console.log("Hi");
    var user = document.getElementById("registerUserId").value;
    var Mail = document.getElementById("registerMail").value;
    var userPass = document.getElementById("registerPass").value;
    var newUser = {
        id: user,
        mail: Mail,
        password: userPass,
    };
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
});

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var user = document.getElementById("loginUserId").value;
    var userPass = document.getElementById("loginPass").value;

    var loggedUser = {
        id: user,
        password: userPass,
    };

    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((registeredUser) => {
        if (loggedUser.id == registeredUser.id && loggedUser.password == registeredUser.password) {
            console.log("logged in!");
            window.location.href = "./index.html";
        } else {
            console.log("Wrong password");
        }
    });
});

function Register() {
    loginForm.style.left = "-25rem";
    registerForm.style.left = "3.125rem";
    btn.style.left = "6.875rem";
}

function login() {
    loginForm.style.left = "3.125rem";
    registerForm.style.left = "28.125rem";
    btn.style.left = "0";
}

// function get() {
//     localStorage.getItem("user");
//     localStorage.getItem("userPass");
//     localStorage.getItem("Mail");
// }

var inputs = document.querySelectorAll("input");
var submit = document.querySelector(".submit-btn");

inputs.forEach((input) => {
    input.addEventListener("focus", function () {
        input.style.border = "  ";
    });
});
