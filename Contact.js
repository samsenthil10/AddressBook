const Address = require('./Address');

class Contact {

    firstName;
    lastName;
    address;
    phoneNumber;
    email;

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = new Address(params[2], params[3], params[4]);
        this.phoneNumber = params[5];
        this.email = params[6];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'firstName is incorrect';
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'lastName is incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$')
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'phoneNumber is incorrect';
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^((((abc)[a-zA-Z0-9]*)||(abc[_\\+\\-\\.][a-zA-Z0-9]*))+(?<!\\.)@([0-9a-zA-Z]{1,}))\\.(([a-zA-Z]{2,}\\.[a-zA-Z]{2})||([a-zA-Z\\,]{2,}))+(?<!\\.)$')
        if (emailRegex.test(email))
            this._email = email;
        else throw 'email is incorrect';
    }

    toString() {
        return "First Name= " + this.firstName + ", Last Name= " + this.lastName
            + ", City= " + this.address.city + ", State= " + this.address.state
            + ", Zip= " + this.address.zip + ", Phone Number= " + this.phoneNumber
            + ", Email= " + this.email;
    }
}

try {

    let contact1 = new Contact('Test1', 'User1', 'Test City1', 'Test State1', 560001, '1111111111', 'test1@gmail.com');
    let contact2 = new Contact('Test2', 'User2', 'Test City2', 'Test State2', 660002, '2222222222', 'test2@gmail.com');
    let contact3 = new Contact('Test3', 'User3', 'Test City3', 'Test State2', 760002, '3333333333', 'test3@gmail.com');
    console.log("" + contact1)
    console.log("" + contact2)
    console.log("" + contact3)
}
catch (exception) {
    console.log(exception)
}

module.exports = Contact;