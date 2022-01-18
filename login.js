// put all the id needed into a constant
const login_box = document.getElementById("login_box");
const login_box_submit = document.getElementById("login_box_submit");
const login_error_box = document.getElementById("login_error_box");

login_box_submit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login_box.username.value;
    const password = login_box.password.value;

    // first condition, to see if the username and password input are correct
    if (username === "testing" && password === "12345678") {
        alert("You have successfully logged in.");
        location.reload();
    // anything otherwise will return as false, the error box will be shown
    } else {
        login_error_box.style.opacity = 1;
    }
})