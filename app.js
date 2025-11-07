const express = require('express');
const app = express();
const port = 8000;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Code is running at http://localhost:${port}`);
});