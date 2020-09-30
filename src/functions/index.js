const list = require("../index").list;

module.exports = class Functions {
    add(name, callback) {
        if (list.has(name)) throw new TypeError("The name is alrady used");
        list.set(name, callback);
    }

    remove(name) {
        if (list.has(name)) throw new TypeError("404: Not Found");
        var rv = list.get(name);
        list.delete(name);
        return rv;
    }

    execute(name) {
        if (list.has(name)) throw new TypeError("404: Not Found");
        list.get(name).call(this, name);
    }

    clear() {
        list.clear();
    }

    static instance() {
        return new Functions();
    }
}