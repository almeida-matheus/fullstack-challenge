const express = require('express');
const configApp = require('./app/config');
const app = express();

configApp(app);

module.exports = app;
