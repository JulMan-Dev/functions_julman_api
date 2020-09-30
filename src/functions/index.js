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

    remove(name) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        var rv = this.list.get(name);
        this.list.delete(name);
        return rv;
    }

    execute(name) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        this.list.get(name).call(this, name);
    }

    replace(name, new_callback) {
        if (!this.list.has(name)) throw new TypeError("404: Not Found");
        var rv = this.list.get(name);
        this.list.delete(name);
        this.add(name, new_callback);
        return rv;
    }

    clear() {
        this.list.clear();
    }

    static instance() {
        return new Functions();
    }
}