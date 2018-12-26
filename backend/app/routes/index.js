const defaultRoute = require('./default');
const participationRoute = require('./participation');
const winstonMiddleware = require('../middlewares/winston');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	app.use(participationRoute);
	app.use(defaultRoute);
};
