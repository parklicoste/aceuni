
var SHA256 = require("crypto-js/sha256");

export const sendPasswordHash = (password) => {
    var hash = SHA256(password)
    console.log("MY HASH IS: ", hash)
    return hash
}

