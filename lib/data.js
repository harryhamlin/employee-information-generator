// <====== constructor to create an object with input employee data including 'other' which would include either office#, github un, or school ======>
class Data {
    constructor(level, name, email, id, other) {
    this.level = level;
    this.name = name;
    this.email = email;
    this.id = id;
    this.other = other;
    }
}

module.exports = Data;