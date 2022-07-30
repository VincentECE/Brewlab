const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', router);

let port = 3001;

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});