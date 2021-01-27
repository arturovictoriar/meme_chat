// import libraries
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const bodyParser = require("body-parser");
// import modules
const { addUser, removeUser, getUser, getUsersInRoom } = require('./usersActions');
const allUsers = require('../Api/allUsers');
const router = require('../Api/router');
const messages = require('./storedMessages');
// create express, http, and socket intances
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
// allow middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(router);

/**
 * On a socket connection, make some actions
 */
io.on('connect', (socket) => {
  /**
   * On an addUser event, add a user in the user connected list
   */
  socket.on('addUser', ({ username }, callback) => {
    // constanst
    const room = "meme";
    const admin = "admin";

    // add the user in the user connected list
    const user = addUser({ id: socket.id, username, room });

    // create the meme room
    socket.join(user.room);
    // Send to all users, except the current one, the new list of users connected
    socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });
    // Send to the current user, the new list of user connected
    socket.emit('usersList', { admin, users: getUsersInRoom(user.room) });
    // Send to the current user, the historial messages
    socket.emit('updateMessages', { admin, messages });

    callback();
  });

  /**
   * On a sendMessage event, broadcast the new message to all users,
   * expect the sender one
   */
  socket.on('sendMessage', (action, callback) => {
    // look for the current user
    const user = getUser(socket.id);
    // save the new message in the db
    messages.push({
      id: action.id,
      message: action.message,
      author: action.author,
      date: action.date
    });
    // Send to all users, except the current one, the new message
    socket.broadcast.to(user.room).emit('receiveMessage', action);
  });

  /**
   * On disconnect, remove the user from the list of users connected
   */
  socket.on('disconnect', () => {
    // constant
    const admin = "admin";
    // remove the user from the connected users list
    const user = removeUser(socket.id);

    if (user) {
      // update the users connected
      socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });
      if (user.name in allUsers) {
        // set the user as disconnected
        allUsers[user.name].connected = false;
      }
    }
  });

});

// start the server in a given port
server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
