function validate() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            alert("STRAIGHT UP!")
            return
        }
    }
    alert("OH NO!")
}

