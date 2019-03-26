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



var user1 = new User("admin","admin","hackerman@hackerman.com","Kuba","Dejnek","12","Szczebrzeszyn")
var user2 = new User("notadmin","notadmin","gmail@gmail.com","John","Doe","18","Copenhagen")

var users = [user1, user2];

// prevent deafult

// Inheritence: subclass Admin