storedUsers = [];
storedUsers = JSON.parse(localStorage.getItem('userData'));

function validate() {
    var usernameInput = document.getElementById("username_login").value;
    var passwordInput = document.getElementById("password_login").value;
    console.log(storedUsers);

    for (i = 0; i < storedUsers.length; i++) {
        if (usernameInput == storedUsers[i].username && passwordInput == storedUsers[i].password) {
            return window.open('index5.html')
            

        }
    } alert("Incorrect login information. Please try again.")
}



