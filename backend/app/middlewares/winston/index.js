const logger = require('../../modules/winston');

module.exports = (req, res, next) => {
	logger.info(`REQUESTING API: URL ${req.url}`);
	next();
};
