module.exports = () => {
	const colors = [
		'#78788d',
		'#9f9fc5',
		'#dbd6c9',
		'#66b4d5',
		'#80b6aa',
		'#747485',
		'#54546c',
		'#979797',
		'#617781',
		'#64857e',
		'#cf8888',
		'#c3856b',
		'#a4a3a0',
		'#917956',
		'#d1bb80',
		'#a47f7f',
		'#ba907e',
		'#999998',
		'#b08f5e',
		'#bcab80'
	];

	return colors[Math.floor(Math.random() * colors.length)];
};
