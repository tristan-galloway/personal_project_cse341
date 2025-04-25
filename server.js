// Imports
const express = require('express');
const app = express();

// Port configuration
const port = 3000;

app.use('/', require('./routes'));

// Start the server
app.listen(port, () => {
  console.log('Web Server is listening at port ' + (port));
});