class Address {

    city;
    state;
    zip;

    get city() {
        return this.city;
    }
    get state() {
        return this.city;
    }
    get zip() {
        return this.city;
    }
    set city(city) {

        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if (cityRegex.test(city))
            this._city = city;
        else throw 'City is incorrect';
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$')
        if (stateRegex.test(state))
            this._state = state;
        else throw 'State is incorrect';
    }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}[]?[0-9]{3}$')
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is incorrect';
    }

    constructor(city, state, zip) {

        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

module.exports = Address;
