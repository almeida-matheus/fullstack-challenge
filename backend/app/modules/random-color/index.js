module.exports = () => {
	const colors = [
		'#40407a',
		'#706fd3',
		'#f7f1e3',
		'#34ace0',
		'#33d9b2',
		'#2c2c54',
		'#474787',
		'#aaa69d',
		'#227093',
		'#218c74',
		'#ff5252',
		'#ff793f',
		'#d1ccc0',
		'#ffb142',
		'#ffda79',
		'#b33939',
		'#cd6133',
		'#84817a',
		'#cc8e35',
		'#ccae62'
	];

	return colors[Math.floor(Math.random() * colors.length)];
};
