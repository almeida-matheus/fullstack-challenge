const express = require('express');
const participationController = require('../../controllers/participation');
const validators = require('../../validators');

const Router = express.Router;
const route = Router();

route.get('/participation', participationController.getParticipations);
route.post('/participation', validators.participationValidator(), participationController.postParticipation);
route.delete('/participation', participationController.deleteParticipation);

module.exports = route;
