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



/*var resultSpan = document.getElementById('loginResult')

if (submit) {
    // Bind the onClick-function to our own function
    submit.onclick = function(){
  
      // Bind the two input fields and get the value
      var inputUsername = document.getElementById('username');
      var inputPassword = document.getElementById('password');
  
      if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
        // We set the resultspan with a new text and return false to get out of this function
        resultSpan.innerText = "You need to enter a username and password in order to use our system";
        return false;
}**/
