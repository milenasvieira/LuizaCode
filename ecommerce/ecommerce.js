const User = require("./user"); //mais raro de ser usado

class Ecommerce {
    registeredUsers = []

    createUser(user) {
        const newUser = new User(user);
        this.registeredUsers.push(newUser);
    }

    login = (email, password) => {
        console.log(email, password)
    }
}

module.exports = Ecommerce //mais raro de ser usado