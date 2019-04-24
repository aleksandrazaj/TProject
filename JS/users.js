//User class for login and registration purposes
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

//Array stores all registered users
var users = [];
users.push(new User("admin", "admin", "admin@admin.com", "Kuba", "Dejnek", "23", "Copenhagen"))

//Adds new user to the user array based on the input provided in registration form by the user
function addUser() {
    var usernameUI = document.getElementById("username_register").value
    var passwordUI = document.getElementById("password_register").value
    var emailAddressUI = document.getElementById("emailAddress_register").value
    var firstNameUI = document.getElementById("firstName_register").value
    var lastNameUI = document.getElementById("lastName_register").value
    var ageUI = document.getElementById("age_register").value
    var billingAddressUI = document.getElementById("billingAddress_register").value
    var passwordConfirmUI = document.getElementById("confirm_password_register").value

    //Checks if password input matches
    if (passwordUI != passwordConfirmUI) {
        alert("Passwords do not match.")
    } else {
    //Verifies user's age
    var ofAge = 18
    if (ageUI - ofAge < 0) {
        alert("You must be over 18 years old to use the store.")
    } else {
    // Prevents user from leaving empty fields in the form
    if (usernameUI.length == 0 || passwordUI.length == 0 || emailAddressUI.length == 0 || firstNameUI.length == 0 || lastNameUI.length == 0 || ageUI.length == 0 || billingAddressUI.lenght == 0) {
        alert("All fields are required")
    } else {
        //Adds a new user to the array
         users.push(new User(usernameUI, passwordUI, emailAddressUI, firstNameUI, lastNameUI, ageUI, billingAddressUI))
    //Saves all registered users to local storage
    localStorage.setItem('userData', JSON.stringify(users))
    //Welcome alert
    alert('Welcome' + ' '+ firstNameUI + '. You can now log in to access the store.')
    //Redirect to login
    window.location.replace('login.html')
    } } }
}
