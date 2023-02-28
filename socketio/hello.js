const app = require('express')();

app.get('/hello/', function(req, res) {
  res.send('Hello World!');
});

var port = 3001
app.listen(port,function(){
  console.log(`app listening on port ${port}`);
});
