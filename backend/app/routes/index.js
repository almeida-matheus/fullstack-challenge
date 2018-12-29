const participationRoute = require('./participation');
const winstonMiddleware = require('../middlewares/winston');
const jwtMiddleware = require('../middlewares/jwt');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	app.use('/', jwtMiddleware);
	app.use(participationRoute);
};
