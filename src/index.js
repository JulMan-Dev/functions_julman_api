/**
 * @type {Map<String, function(String): void>}
 */
const list = new Map();

exports.list = list;
module.exports = {
    Functions: require("./functions/index.js")
};