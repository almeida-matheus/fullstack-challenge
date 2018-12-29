const constants = {
	MESSAGES: {
		FIRST_NAME_LENGTH: 'The First name must be between 2 and 15 characters',
		LAST_NAME_LENGTH: 'The Last name must be between 2 and 15 characters',
		PARTICIPATION_LENGTH: 'Participation must be between 1 and 100',
		REQUIRED: 'A value is required',
		CATCH_ON_REQUEST: 'Ohh, we have a problem :( please check your internet connection and try again',
		IS_EMPTY: 'Ohhh ;( empty data, try add a new participation'
	},
	API: {
		ROOT: 'http://192.168.0.101:7070',
		ACTIONS: {
			PARTICIPATION: '/participation'
		},
		METHODS: {
			GET: 'GET',
			POST: 'POST',
			DELETE: 'DELETE'
		}
	},
	HOME: {
		TITLE: 'Employees',
		SUBTITLE: 'Employees involvement and participation at work'
	},
	JWT: {
		SECRET: 'j2onfullstackchallendsecret',
		ADMIN_PASSWORD: 'j20nwebtok3npassword',
		ADMIN_NAME: 'admin',
		ADMIN_USERNAME: 'admin',
		EXPIRES_IN: 86400
	}
};

export default constants;
