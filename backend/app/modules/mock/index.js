const uuidv1 = require('uuid/v1');
const randomColor = require('../random-color');

const setInitialParticipations = () => {
	if (!(global.participations instanceof Array)) {
		global.participations = [
			{
				id: uuidv1(),
				firstName: 'Rodrigo',
				lastName: 'Amarante',
				participation: 5,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Rodrigo',
				lastName: 'Amarante',
				participation: 60,
				color: randomColor()
			}
		];
	}
};

module.exports.getParticipations = () => {
	setInitialParticipations();
	return global.participations;
};

module.exports.addParticipation = (model) => {
	setInitialParticipations();
	global.participations.push(model);
	return model;
};
