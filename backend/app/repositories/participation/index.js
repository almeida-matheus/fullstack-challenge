const mock = require('../../modules/mock');

module.exports.getAllParticipations = () => {
	return mock.getParticipations();
};

module.exports.addParticipation = (model) => {
	return mock.addParticipation(model);
};

module.exports.getParticipationPercentage = () => {
	const participations = this.getAllParticipations();

	return participations.reduce(
		(a, b) => parseInt(a, 0) + parseInt(b.participation, 0)
	, 0);
};
