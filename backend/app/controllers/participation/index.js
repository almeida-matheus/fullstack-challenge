exports.getParticipations = (req, res) => {
	const participations = [
		{
			firstName: 'Matheus',
			lastName: 'Almeida',
			participation: 40
		},
		{
			firstName: 'Rodrigo',
			lastName: 'Amarante',
			participation: 45
		}
	];

	res.status(200).json({
		success: true,
		result: participations
	});
};
