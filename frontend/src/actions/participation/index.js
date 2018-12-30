import queryString from 'querystring';
import participationConstants from '../../redux-constants/participation';
import constants from '../../constants';
import * as utils from '../../utils';

export function requestPostParticipation (params) {
	const token = utils.generateFakeJwtToken();

	return dispatch => {
		dispatch({
			type: participationConstants.REQUEST_POST_PARTICIPATION
		});

		return fetch(`${constants.API.ROOT}${constants.API.ACTIONS.PARTICIPATION}`, {
			method: constants.API.METHODS.POST,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-access-token': token
			},
			body: queryString.stringify(params)
		})
			.then(response => response.json())
			.catch((result) => result)
			.finally(() => dispatch({
				type: participationConstants.STOP_POST_PARTICIPATION
			}));
	};
}
export function requestDeleteParticipation (id) {
	const token = utils.generateFakeJwtToken();

	return dispatch => {
		const params = {
			id
		};

		dispatch({
			type: participationConstants.REQUEST_DELETE_PARTICIPATION
		});

		return fetch(`${constants.API.ROOT}${constants.API.ACTIONS.PARTICIPATION}`, {
			method: constants.API.METHODS.DELETE,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-access-token': token
			},
			body: queryString.stringify(params)
		})
			.then(response => response.json())
			.catch((result) => result)
			.finally(() => dispatch({
				type: participationConstants.STOP_DELETE_PARTICIPATION
			}));
	};
}

export function requestGetParticipations () {
	const token = utils.generateFakeJwtToken();

	return dispatch => {
		dispatch({
			type: participationConstants.REQUEST_GET_PARTICIPATIONS
		});

		return fetch(`${constants.API.ROOT}${constants.API.ACTIONS.PARTICIPATION}`, {
			method: constants.API.METHODS.GET,
			headers: {
				'x-access-token': token
			}
		})
			.then(response => response.json())
			.then((json) => {
				const { result } = json;

				if (result) {
					dispatch(setParticipations(result));
				}

				return json;
			})
			.catch((result) => result)
			.finally(() => dispatch({
				type: participationConstants.STOP_GET_PARTICIPATIONS
			}));
	};
}

export function setParticipations (result) {
	return {
		type: participationConstants.SET_PARTICIPATIONS,
		result
	};
}
