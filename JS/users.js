class User {
    constructor(username,password,emailAddress,firstName,lastName,age,billingAddress) {
    this.username = username
    this.password = password
    this.emailAddress = emailAddress
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.billingAddress = billingAddress }

}


var users = [];
users.push(new User("admin", "admin", "admin@admin.com", "Kuba", "Dejnek", "23", "Copenhagen"))

function addUser() {
    var usernameUI = document.getElementById("username_register").value
    var passwordUI = document.getElementById("password_register").value
    var emailAddressUI = document.getElementById("emailAddress_register").value
    var firstNameUI = document.getElementById("firstName_register").value
    var lastNameUI = document.getElementById("lastName_register").value
    var ageUI = document.getElementById("age_register").value
    var billingAddressUI = document.getElementById("billingAddress_register").value

    if (usernameUI.length == 0 || passwordUI.length == 0 || emailAddressUI.length == 0 || firstNameUI.length == 0 || lastNameUI.length == 0 || ageUI.length == 0 || billingAddressUI.lenght == 0) {
        alert("Please fill in the form.")
    } else {
         users.push(new User(usernameUI, passwordUI, emailAddressUI, firstNameUI, lastNameUI, ageUI, billingAddressUI))
    localStorage.setItem('userData', JSON.stringify(users))
    alert('Welcome' + ' '+ firstNameUI + '. You can now log in to access the store')
    window.location.replace('login.html')
    }

   
    
}




// prevent deafult

// Inheritence: subclass Admin


//Checks whether the username is already registered
