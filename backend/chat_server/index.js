const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

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

    socket.emit('message', { admin, text: `${user.name}, welcome to room ${user.room}.` });

    // socket.broadcast.to(user.room).emit('message', { admin, text: `${user.name} has joined!` });
    socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });

    socket.emit('usersList', { admin, users: getUsersInRoom(user.room) });

    callback();
  });


  socket.on('sendMessage', (action, callback) => {
    const user = getUser(socket.id);
    socket.broadcast.to(user.room).emit('receiveMessage', action);
  })

  socket.on('disconnect', () => {
    const room = "meme";
    const admin = "admin";
    const user = removeUser(socket.id);

    if (user) {
      // socket.to(user.room).emit('message', { admin , text: `${user.name} has left.` });
      socket.broadcast.to(user.room).emit('usersList', { admin, users: getUsersInRoom(user.room) });
    }
  })

});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));