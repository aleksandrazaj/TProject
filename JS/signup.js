function addUser() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var emailAddress = document.getElementById("emailAddress").value
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var age = document.getElementById("age").value
    var billingAddress = document.getElementById("billingAddress").value

    users.push(new User(username, password, emailAddress, firstName, lastName, age, billingAddress));

    localStorage.setItem('userData', JSON.stringify(users));
    
    

}


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
