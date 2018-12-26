const { validationResult } = require('express-validator/check');
const participationRepository = require('../../repositories/participation');
const uuidv1 = require('uuid/v1');


exports.getParticipations = (req, res) => {
	res.status(200).json({
		success: true,
		result: participationRepository.getAllParticipations()
	});
};

exports.postParticipation = (req, res) => {
	let participationModel = {};
	const errors = validationResult(req).array();
	const {
		firstName,
		lastName,
		participation
	} = req.body;

	if (errors.length > 0) {
		res.status(400).json({
			success: false,
			errors
		});
	} else {
		participationModel = {
			id: uuidv1(),
			firstName,
			lastName,
			participation: parseInt(participation, 0)
		};

		participationRepository.addParticipation(participationModel);

		res.status(200).json({
			success: true
		});
	}
};
