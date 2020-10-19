const { list } = require("..");

module.exports = class Functions {
    constructor () {
        /**
         * @type {Map<String, (arg0: String) => void>}
         */
        this.list = new Map();
    }

    add(name, callback) {
        if (this.list.has(name)) throw new TypeError("The name is alrady used");
        this.list.set(name, callback);
    }

    static add(name, callback) {
        if (list.has(name)) throw new TypeError("The name is alrady used");
        list.set(name, callback);
    }

    remove(name) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        var rv = this.list.get(name);
        this.list.delete(name);
        return rv;
    }

    static remove(name) {
        if (!list.has(name)) throw new TypeError("404: Not Found");
        var rv = list.get(name);
        list.delete(name);
        return rv;
    }

    execute(name) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        this.list.get(name).call(this, name);
    }

    static execute(name) {
        if (!list.has(name)) throw new TypeError("404: Not Found");
        list.get(name).call(this, name);
    }

    replace(name, new_callback) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        var rv = this.list.get(name);
        this.list.delete(name);
        this.add(name, new_callback);
        return rv;
    }

    static replace(name, new_callback) {
        if (!list.has(name)) throw new TypeError("404: Not Found");
        var rv = list.get(name);
        list.delete(name);
        if (list.has(name)) throw new TypeError("The name is alrady used");
        list.set(name, callback);
        return rv;
    }

    clear() {
        this.list.clear();
    }

    static clear() {
        list.clear();
    }

    static instance() {
        return new Functions();
    }
}