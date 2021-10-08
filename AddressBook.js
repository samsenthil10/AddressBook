class AddressBook {

    contacts = new Array();

    get contacts() {
        return this.contacts;
    }

    set contacts(value) {
        this.contacts = value;
    }

    printAddressBook(addressBook) {
        console.log("")
        addressBook.contacts.forEach(element => {
            console.log("" + element)
        }); 
        console.log("\n")
    }
}
module.exports = AddressBook;