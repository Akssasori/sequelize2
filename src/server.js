const express = require('express');
const routes = require('./routes');

// require('./database');
require('../src/config/config.json')
require('../src/config/database')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3332);

