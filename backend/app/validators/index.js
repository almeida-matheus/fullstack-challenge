const { check } = require('express-validator/check');
const constants = require('../modules/constants');
const participationRepository = require('../repositories/participation');

module.exports.participationValidator = () => {
	return [
		check('firstName')
			.isLength({ min: 2, max: 15 })
			.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.FIRSTNAME_BETWEEN_LENGTH_1_AND_15),
		check('lastName')
			.isLength({ min: 2, max: 15 })
			.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.LASTNAME_BETWEEN_LENGTH_1_AND_15),
		check('participation')
			.isInt({ min: 1, max: 100 })
			.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.PARTICIPATION_BETWEEN_1_AND_100)
			.custom((value, { req }) => {
				const participationPercentage = participationRepository.getParticipationPercentage();

				return !((parseInt(value, 0) + parseInt(participationPercentage, 0)) > 100);
			})
			.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.PARTICIPATION_MAX_VALUE_EXCEEDED)
	];
};
