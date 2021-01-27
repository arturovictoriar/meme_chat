const sha256 = require("crypto-js/sha256")
const enc = require("crypto-js/enc-base64")

const users = {
    arturo: { pw: sha256("12345").toString(enc), connected: false },
    nicolai: { pw: sha256("12345").toString(enc), connected: false }
};

module.exports = users;