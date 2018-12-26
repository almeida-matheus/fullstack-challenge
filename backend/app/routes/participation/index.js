const express = require('express');
const participationController = require('../../controllers/participation');
const Router = express.Router;
const route = Router();

route.get('/participation', participationController.getParticipations);

module.exports = route;
