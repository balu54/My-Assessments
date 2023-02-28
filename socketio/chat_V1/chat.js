// this node js
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('go for either index 1 or 2 or 3');
});

app.get('/index1.html', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
  console.log(' Balu user connected');
});

app.get('/index2.html', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
  console.log('Ram user connected');
});

app.get('/index3.html', (req, res) => {
  res.sendFile(__dirname + '/index3.html');
  console.log('Jos user connected');
});

app.get('/exp.html', (req, res) => {
  res.sendFile(__dirname + '/exp.html');
  console.log('exp user connected');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(5000, () => {
  console.log('Listening on port 5000');
});
