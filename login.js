const login_box = document.getElementById("login_box");
const login_box_submit = document.getElementById("login_box_submit");
const login_error_box = document.getElementById("login_error_box");

login_box_submit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login_box.username.value;
    const password = login_box.password.value;

    if (username === "testing" && password === "12345678") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        login_error_box.style.opacity = 1;
    }
})