const winston = require('winston');
const constants = require('../../modules/constants');

module.exports = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: true
		}),
		new winston.transports.File({
			filename: constants.WINSTON.LOGFILE,
			timestamp: true
		})
	],
	levels: constants.WINSTON.LEVELS,
	colors: constants.WINSTON.COLORS
});
