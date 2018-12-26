exports.getParticipations = (req, res) => {
	const participations = [
		{
			firstName: 'Matheus',
			lastName: 'Almeida',
			participation: 40
		}
	];
	
	res.status(200).json({
		success: true,
		result: participations
	});
};