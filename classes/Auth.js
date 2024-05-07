const Customer = require("./Customer");

class Auth{
    constructor(){
        this.customers = [];
    };

    register(name, email, shippingAddress){
        let customer = new Customer(name,email,shippingAddress)
        this.customers.push(customer);
    };

    login(email){
        return this.customers.find(customer => customer.email==email) || null
    }
}


module.exports = Auth;