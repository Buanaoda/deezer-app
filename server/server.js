const express = require('express');
const cors = require('cors');
const routes = require('./routes/deezer')
require('dotenv').config();

/* App */
const app = express();

/* Middlewares */
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb'}));
app.use(cors());

/* Routes middleware && Importing routes */
app.use('/api', routes);

/* Port */
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});