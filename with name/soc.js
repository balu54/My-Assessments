const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('name', (name) => {
    console.log('Received name: ' + name);
    socket.emit('greeting', 'Hello ' + name);
  });
});

http.listen(5000, () => {
  console.log('Listening on port 5000');
});
