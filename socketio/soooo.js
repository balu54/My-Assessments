const express = require('express');
const app = express();


  // Handle GET requests
app.get('/', (req, res) => {
    console.log("get");
    res.send('Received GET');

  });

  // Handle POST requests
app.post('/post/:id', (req, res) => {
    console.log("post");
    res.render('Received POST')

  });

  // Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
