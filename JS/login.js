//Array to stored users loaded from local storage
storedUsers = [];

//Loads user information from local storage into the array
storedUsers = JSON.parse(localStorage.getItem('userData'));

//Checks whether the combination of login information provided by the user checks out with the data in storedUsers 
function validate() {
    var usernameInput = document.getElementById("username_login").value;
    var passwordInput = document.getElementById("password_login").value;
    

    for (i = 0; i < storedUsers.length; i++) {
        if (usernameInput == storedUsers[i].username && passwordInput == storedUsers[i].password) {
            //Redirect to the store
            return window.location.replace('index.html')
            

        }
    } alert("Incorrect login information. Please try again.")
}



