class AddressBook {

    contacts = new Array();

    get contacts() {
        return this.contacts;
    }

    set contacts(value) {
        this.contacts = value;
    }

    printAddressBook(addressBook) {
        console.log("\n")
        addressBook.contacts.forEach(element => {
            console.log("" + element)
        }); 
    }
}
module.exports = AddressBook;