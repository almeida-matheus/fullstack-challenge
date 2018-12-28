const constants = {
	FORM_ERRORS: {
		FIRST_NAME_LENGTH: 'The First name must be between 2 and 20 characters',
		LAST_NAME_LENGTH: 'The Last name must be between 2 and 20 characters',
		PARTICIPATION_LENGTH: 'Participation must be between 1 and 100',
		REQUIRED: 'A value is required'
	},
	API: {
		ROOT: 'http://192.168.0.101:7070',
		ACTIONS: {
			PARTICIPATION: '/participation'
		},
		METHODS: {
			GET: 'GET',
			POST: 'POST'
		}
	}
};

export default constants;
