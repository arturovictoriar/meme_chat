const users = require("./allUsers")

const checkNickPassword = (nick, password) => {
    if (nick in users && users[nick].connected === false &&
        users[nick].pw === password) {
        users[nick].connected = true;
        return (true);
    }
    return (false);
}

const createUser = (nick, password) => {
    if (nick in users) {
        return (false);
    }
    users[nick] = { pw: password, connected: false };
    return (true);
}

module.exports = {checkNickPassword, createUser};
