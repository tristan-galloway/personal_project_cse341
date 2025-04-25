const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Tristan Galloway's Web Server is running!");
});

const port = 3000;

app.listen(port, () => {
  console.log('Web Server is listening at port ' + (port));
});