const uuidv1 = require('uuid/v1');
const randomColor = require('../random-color');

const setInitialParticipations = () => {
	if (!(global.participations instanceof Array)) {
		global.participations = [
			{
				id: uuidv1(),
				firstName: 'Marciel',
				lastName: 'Silva',
				participation: 5,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'João',
				lastName: 'Souza',
				participation: 5,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'João',
				lastName: 'Silva',
				participation: 5,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Maria',
				lastName: 'Silva',
				participation: 4,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Joaquim',
				lastName: 'Pereira',
				participation: 2,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Janaina',
				lastName: 'Ferreira',
				participation: 1,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Janaina',
				lastName: 'Ferreira',
				participation: 2,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Marcos',
				lastName: 'Pereira',
				participation: 2,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'Márcio',
				lastName: 'Silva',
				participation: 2,
				color: randomColor()
			},
			{
				id: uuidv1(),
				firstName: 'João',
				lastName: 'Marciel',
				participation: 5,
				color: randomColor()
			}
		];
	}
};

module.exports.getParticipations = () => {
	setInitialParticipations();
	return global.participations;
};

module.exports.deleteParticipations = (id) => {
	setInitialParticipations();

	const participation = global.participations.find(item => item.id === id);
	if (participation) {
		global.participations = global.participations.filter(item => item.id !== id);
	}
};

module.exports.addParticipation = (model) => {
	setInitialParticipations();
	global.participations.unshift(model);
	return model;
};
