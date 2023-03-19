const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {
    routes: catRoutes
} = require('./cats/routes');

app.use(cors());
app.use(bodyParser.json());
app.use('/cats', catRoutes);

module.exports = app;