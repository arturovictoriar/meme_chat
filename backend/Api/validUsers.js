// import modules
const users = require("./allUsers");

/**
 * Check if the user and pw are availables to get it in the chat server
 * @param {string} nick 
 * @param {string} password 
 */
const checkNickPassword = (nick, password) => {
    // if the user exist in db and is already disconnected,
    // allow the permission to get in to chat server
    if (nick in users && users[nick].connected === false &&
        users[nick].pw === password) {
        users[nick].connected = true;
        return (true);
    }
    // else, deny the permission to get in the chat server
    return (false);
}

/**
 * Create a new user if the nich is available in the db
 * @param {string} nick 
 * @param {string} password 
 */
const createUser = (nick, password) => {
    // if the user exists in db, Does not create the user
    if (nick in users) {
        return (false);
    }
    // else, create the user
    users[nick] = { pw: password, connected: false };
    return (true);
}

// make the previous function public
module.exports = { checkNickPassword, createUser };
