const mock = require('../../modules/mock');

module.exports.getAllParticipations = () => mock.getParticipations();

module.exports.deleteParticipation = id => mock.deleteParticipations(id);

module.exports.addParticipation = model => mock.addParticipation(model);

module.exports.getParticipationPercentage = () => {
	const participations = this.getAllParticipations();

	return participations.reduce(
		(a, b) => parseInt(a, 0) + parseInt(b.participation, 0)
	, 0);
};
