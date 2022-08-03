const express = require('express');
const { userRoutes } = require('./routes');
const { crossOrigin } = require('./middleware');
const app = express();
require('./db');

app.use(crossOrigin);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', userRoutes);

let port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});