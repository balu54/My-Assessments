const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.send('Go to either index1.html, index2.html or index3.html');
});

app.get('/index2_1.html', (req, res) => {
  res.sendFile(__dirname + '/index2_1.html');
});

app.get('/index2_2.html', (req, res) => {
  res.sendFile(__dirname + '/index2_2.html');
});

app.get('/exp.html', (req, res) => {
  res.sendFile(__dirname + '/exp.html');
});

io.on('connection', (socket) => {
  // get user-entered name and show "user-entered-name user connected"
  const name = socket.handshake.query.name;
  console.log(`${name} user connected`);

  socket.on('disconnect', () => {
    console.log(`${name} user disconnected`);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
