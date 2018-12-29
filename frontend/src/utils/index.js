import jwt from 'jsonwebtoken';
import constants from '../constants';

export function generateFakeJwtToken () {
	const user = {
		name: constants.JWT.ADMIN_NAME,
		username: constants.JWT.ADMIN_USERNAME,
		password: constants.JWT.ADMIN_PASSWORD
	};

	return jwt.sign(user, constants.JWT.SECRET, {
		expiresIn: constants.JWT.EXPIRES_IN
	});
}
