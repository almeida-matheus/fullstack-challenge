const participationRoute = require('./participation');
const winstonMiddleware = require('../middlewares/winston');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	app.use(participationRoute);
};
