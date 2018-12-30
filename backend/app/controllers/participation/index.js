const { validationResult } = require('express-validator/check');
const participationRepository = require('../../repositories/participation');
const uuidv1 = require('uuid/v1');
const randomColor = require('../../modules/random-color');

exports.getParticipations = (req, res) => {
	res.status(200).json({
		success: true,
		result: participationRepository.getParticipations(),
		errors: []
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
			errors,
			result: []
		});
	} else {
		participationModel = {
			id: uuidv1(),
			firstName,
			lastName,
			participation: parseInt(participation, 0),
			color: randomColor()
		};

		const result = participationRepository.addParticipation(participationModel);

		if (global.io) {
			global.io.emit('updateParticipations', { result });
		}

		res.status(200)
			.json({
				success: true,
				errors: [],
				result: []
			});
	}
};

exports.deleteParticipation = (req, res) => {
	const {
		id
	} = req.body;

	const result = participationRepository.deleteParticipation(id);

	if (global.io) {
		global.io.emit('updateParticipations', { result });
	}

	res.status(200)
		.json({
			success: true,
			errors: [],
			result: []
		});
};
