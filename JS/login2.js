var bic = bic || {};

bic.checkLogin = function() {
    var loginUser = document.getElementById("username").value;
    var loginPass = document.getElementById("password").value;
    var storedUser = localStorage.username;
    var storedUser2 = storedUser.replace(/"/g,''); // remove " for plain text display in loginForm
    var storedPass = localStorage.password;
    var checked = document.getElementById("rememberLogin").checked;

    if(checked == true) {
        localStorage.setItem("loggedIn", "yes");
    } else {
        localStorage.setItem("loggedIn", "no");
    }

    // if Username key exists, and user/pass values match storage entries
    if(localStorage.username) {
        if(storedUser.match(loginUser) && storedPass.match(loginPass)) {
            bic.notify("loginForm", "Logged in as: " + storedUser2 + "<br /><br /><a id='logout' href=''>Log out?</a>");
            document.getElementById("logout").onclick = function(e){e.preventDefault();bic.logout();};
            console.log("Logged in as: " + localStorage.username);
        } else {
            bic.loginFailed();
            bic.notify("loginStatus", "Login failed. Please try again.");
            console.log("Failed logins: " + localStorage.failedLogins);
        }
    }
}

// localStorage equiv of cookie
bic.isLoggedIn = function() {
    var a = localStorage.loggedIn;
    var storedUser = localStorage.username;
    var storedUser2 = storedUser.replace(/"/g,''); // removing " as above

    // does a exactly equal "yes"?
    if(a === "yes") {
        bic.notify("loginForm", "Logged in as: " + storedUser2 + "<br /><br /><a id='logout' href=''>Log out?</a>");
        document.getElementById("logout").onclick = function(e){e.preventDefault();bic.logout();};
        console.log("Logged in as: " + localStorage.username);
    }
}

// logout and remove localStorage key
bic.logout = function() {
    document.getElementById("loginForm").innerHTML = "<input type='text' id='loginUser' placeholder='Username'><br /><br /><input type='password' id='loginPass' placeholder='Password'><br /><br /><button type='button' id='login'>Login</button> <button type='button' id='loginReg'>Register</button><br /><br /><input type='checkbox' id='rememberLogin' /> Stay logged in?<br /><span id='loginStatus'></span>";
    bic.loginPrefill();
    bic.delete("loggedIn");
    console.log("Logged out");
}




    // window.localStorage.setItem("usernameStorage", username);
    //window.localStorage.setItem("passwordStorage", password);

    /* var storedUser = localStorage.username;
    var storedPass = localStorage.password;
    var checked = document.getElementById("rememberLogin").checked;

    if(checked == true) {
        localStorage.setItem("loggedIn", "yes");
    } else {
        localStorage.setItem("loggedIn", "no");
    }

    

}