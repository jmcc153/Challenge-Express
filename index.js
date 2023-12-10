require('dotenv').config();
const express = require('express');
const routes = require('./api/routes');
require('./api/database/mongoDB');

const app = express();
const port = 3000;

app.use(express.json());



routes(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


