const express = require('express');
const defaultController = require('../../controllers/default');
const Router = express.Router;
const route = Router();

route.get('/', defaultController.defaultGet);

module.exports = route;
