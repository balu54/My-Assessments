const express = require('express');
const app = express();

fetch('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({ name: 'John', age: 30 })
  })
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));

  // Handle GET requests
app.get('/', (req, res) => {
    res.send('Received GET');
  });

  // Handle POST requests
app.post('/post/:id', (req, res) => {
    res.Render('Received POST');
  });

  // Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
