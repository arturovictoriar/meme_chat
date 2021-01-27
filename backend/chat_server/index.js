const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const bodyParser = require("body-parser");

const { addUser, removeUser, getUser, getUsersInRoom } = require('./usersActions');
const allUsers = require('../Api/allUsers');
const router = require('../Api/router');
const messages = require('./storedMessages');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(bodyParser.json());
app.use(cors());
app.use(router);

io.on('connect', (socket) => {

  socket.on('addUser', ({ username }, callback) => {
    const room = "meme";
    const admin = "admin";
    const { error, user } = addUser({ id: socket.id, username, room });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);

    socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });

    socket.emit('usersList', { admin, users: getUsersInRoom(user.room) });
    socket.emit('updateMessages', { admin, messages });

    callback();
  });


  socket.on('sendMessage', (action, callback) => {
    const user = getUser(socket.id);
    messages.push({
      id: action.id,
      message: action.message,
      author: action.author,
      date: action.date
    });
    socket.broadcast.to(user.room).emit('receiveMessage', action);
  })

  socket.on('disconnect', () => {
    const admin = "admin";
    const user = removeUser(socket.id);

    if (user) {
      socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });
      allUsers[user.name].connected = false;
    }
  })

});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));