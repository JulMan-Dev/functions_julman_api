const list = require("../index").list;

module.exports = class Functions {
    static add(name, callback) {
        if (list.has(name)) throw new TypeError("The name is alrady used");
        list.set(name, callback);
    }

    static remove(name) {
        if (list.has(name)) throw new TypeError("404: Not Found");
        var rv = list.get(name);
        list.delete(name);
        return rv;
    }

    static execute(name) {
        if (list.has(name)) throw new TypeError("404: Not Found");
        list.get(name).call(this, name);
    }
}