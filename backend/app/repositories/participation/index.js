const mock = require('../../modules/mock');

module.exports.getParticipations = () => mock.getParticipations();

module.exports.deleteParticipation = id => mock.deleteParticipation(id);

module.exports.addParticipation = model => mock.addParticipation(model);

module.exports.getParticipationPercentage = () => {
	const participations = this.getParticipations();

	return participations.reduce(
		(a, b) => parseInt(a, 0) + parseInt(b.participation, 0)
	, 0);
};
