const Address = require('./Address');
const AddressBook = require('./AddressBook');

class Contact {

    firstName;
    lastName;
    address;
    phoneNumber;
    email;

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name is Incorrect';
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name is Incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$')
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number is Incorrect';
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp('^((((abc)[a-zA-Z0-9]*)||(abc[_\\+\\-\\.][a-zA-Z0-9]*))+(?<!\\.)@([0-9a-zA-Z]{1,}))\\.(([a-zA-Z]{2,}\\.[a-zA-Z]{2})||([a-zA-Z\\,]{2,}))+(?<!\\.)$')
        if (emailRegex.test(email))
            this._email = email;
        else throw 'Email is Incorrect';
    }

    toString() {
        return "First Name= " + this.firstName + ", Last Name= " + this.lastName
            + ", City= " + this.address.city + ", State= " + this.address.state
            + ", Zip= " + this.address.zip + ", Phone Number= " + this.phoneNumber
            + ", Email= " + this.email;
    }

    createContact(firstName, lastName, city, state, zip, phoneNumber, email) {

        var contact = new Contact();
        var address = new Address();
        contact.firstName = firstName;
        contact.address = address.createAddress(city, state, zip);
        contact.phoneNumber = phoneNumber;
        contact.element = email;
        return contact
    }

    addContactToAddressBook(addressBook, contactToBeAdded) {
        if (addressBook.contacts.some((contact) => {
            return contact.firstName == contactToBeAdded.firstName
        })) {
            console.log("Contact Already Exists!");
        }
        else {
            addressBook.contacts.push(contactToBeAdded);
            console.log("Contact Added");
        }
        return addressBook;
    }

    editContactInAddressBook(addressBook, nameOfContactToBeEdited, contactDetailsToBeEdited) {
        var index = addressBook.contacts.map(element => element.firstName).indexOf(nameOfContactToBeEdited);
        if (index == -1) {
            console.log("Contact Not Found!")
        }
        else {
            addressBook.contacts.splice(index, 1, contactDetailsToBeEdited);
            console.log("Contact Edited");
        }
    }

    deleteContactFromAddressBook(addressBook, nameOfContactToBeDeleted) {
        var index = addressBook.contacts.map(element => element.firstName).indexOf(nameOfContactToBeDeleted);
        if (index == -1) {
            console.log("Contact Not Found!")
        }
        else {
            addressBook.contacts.splice(index, 1);
            console.log("Contact Deleted");
        }
    }

    getTotalCount(addressBook) {

        return addressBook.contacts.length;
    }

    searchContactByCity(addressBook, cityToSearch, personToSearch) {

        if (addressBook.contacts.length < 1)
            console.log("Contact Not Found!")
        else
            addressBook.contacts.filter(contact => contact.address.city == cityToSearch)
                .filter(contact => contact.firstName == personToSearch)
                .forEach(contact => console.log("" + contact));
    }

    searchContactByState(addressBook, stateToSearch, personToSearch) {

        if (addressBook.contacts.length < 1)
            console.log("Contact Not Found!")
        else
            addressBook.contacts.filter(contact => contact.address.state == stateToSearch)
                .filter(contact => contact.firstName == personToSearch)
                .forEach(contact => console.log("" + contact));
    }
}

try {

    var contact = new Contact();
    var addressBook = new AddressBook();

    testCreationOfContacts();
    testEditingOfContact();
    testDeletionOfContact();
    testGetTotalCountOfContacts();
    testSearchContactByCityOrState();
}

catch (exception) {
    console.log(exception)
}

module.exports = Contact;

function testCreationOfContacts() {


    let contact1 = contact.createContact('Test1', 'User1', 'Test City1', 'Test State1', 560001, '1111111111', 'test1@gmail.com');
    let contact2 = contact.createContact('Test2', 'User2', 'Test City2', 'Test State2', 660002, '2222222222', 'test2@gmail.com');
    let contact3 = contact.createContact('Test3', 'User3', 'Test City3', 'Test State2', 760002, '3333333333', 'test3@gmail.com');
    addressBook = contact.addContactToAddressBook(addressBook, contact1);
    addressBook = contact.addContactToAddressBook(addressBook, contact2);
    addressBook = contact.addContactToAddressBook(addressBook, contact3);
    addressBook.printAddressBook(addressBook);
}

function testEditingOfContact() {
    let nameOfContactToBeEdited = "Test3";
    let contactDetailsToBeEdited = contact.createContact('Test3', 'User3', 'Test City3', 'Test State3', 760003, '3333333333', 'test3@gmail.com');
    contact.editContactInAddressBook(addressBook, nameOfContactToBeEdited, contactDetailsToBeEdited);
    addressBook.printAddressBook(addressBook);
}

function testDeletionOfContact() {
    let nameOfContactToBeDeleted = "Test2";
    contact.deleteContactFromAddressBook(addressBook, nameOfContactToBeDeleted);
    addressBook.printAddressBook(addressBook);
}

function testGetTotalCountOfContacts() {
    var totalContacts = contact.getTotalCount(addressBook);
    console.log("Total contacts: ", totalContacts);
}

function testSearchContactByCityOrState() {

    console.log("")
    let cityToSearch = 'Test City3';
    let personToSearch = 'Test3';
    contact.searchContactByCity(addressBook, cityToSearch, personToSearch);

    let stateToSearch = 'Test State1';
    personToSearch = 'Test1';
    contact.searchContactByState(addressBook, stateToSearch, personToSearch);
}