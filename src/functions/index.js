/** @type {Map<string, (this: typeof Functions, name: string) => void} */
const list = new Map();

class Functions {
    constructor() {
        /** @type {Maps<string, (this: Functions, name: string) => void>} */
        this.list = new Map();
    }

    /**
     * @param {string} name 
     * @param {(this: Functions, name: string) => void} callback
     */
    add(name, callback) {
        if (this.list.has(name))
            throw new TypeError("The name is alrady used");

        this.list.set(name, callback);
    }

    /**
     * @param {string} name 
     * @param {(this: typeof Functions, name: string) => void} callback 
     */
    static add(name, callback) {
        if (list.has(name))
            throw new TypeError("The name is alrady used");

        list.set(name, callback);
    }

    /**
     * @param {string} name 
     * @returns {(this: Functions, name: string) => void}
     */
    remove(name) {
        if (!this.list.has(name))
            throw new TypeError("The name is not in use");

        let rv = this.list.get(name);
        this.list.delete(name);
        return rv;
    }

    /**
     * @param {string} name 
     * @returns {(this: typeof Functions, name: string) => void}
     */
    static remove(name) {
        if (!list.has(name))
            throw new TypeError("The name is not in use");

        var rv = list.get(name);
        list.delete(name);
        return rv;
    }

    /**
     * @param {string} name 
     */
    execute(name) {
        if (!this.list.has(name))
            throw new TypeError("The name is not in use");

        this.list.get(name).call(this, name);
    }

    /**
     * @param {string} name 
     */
    static execute(name) {
        if (!list.has(name))
            throw new TypeError("The name is not in use");

        list.get(name).call(this, name);
    }

    /**
     * @param {string} name 
     * @param {(this: Functions, name: string) => void}
     * @returns {(this: Functions, name: string) => void}
     */
    replace(name, new_callback) {
        if (!this.list.has(name))
            throw new TypeError("The name is not in use");

        let rv = this.remove(name);

        this.add(name, new_callback);
        return rv;
    }

    /**
     * @param {string} name 
     * @param {(this: typeof Functions, name: string) => void}
     * @returns {(this: typeof Functions, name: string) => void}
     */
    static replace(name, new_callback) {
        let rv = this.remove(name);

        if (list.has(name))
            throw new TypeError("The name is alrady used");

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

module.exports = Functions;