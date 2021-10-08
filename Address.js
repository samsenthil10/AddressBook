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
        this._city = city;
    }
    set state(state) {
        this._state = state;
    }
    set zip(zip) {
        this._zip = zip;
    }

    constructor(city, state, zip) {

        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}
module.exports = Address;
