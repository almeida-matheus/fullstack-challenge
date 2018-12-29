import queryString from 'querystring';
import participationConstants from '../../redux-constants/participation';
import constants from '../../constants';

export function requestPostParticipation (params) {
	return dispatch => {
		dispatch({
			type: participationConstants.REQUEST_POST_PARTICIPATION
		});

		return fetch(`${constants.API.ROOT}${constants.API.ACTIONS.PARTICIPATION}`, {
			method: constants.API.METHODS.POST,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				// 'token': JSON.stringify(getCookie('token')
			},
			body: queryString.stringify(params)
		})
			.then(response => response.json())
			.then((json) => {
				const { result } = json;

				if (result) {
					dispatch(setParticipations(result));
				}

				dispatch({
					type: participationConstants.STOP_POST_PARTICIPATION
				});

				return json;
			})
			.catch((result) => {
				dispatch({
					type: participationConstants.STOP_POST_PARTICIPATION
				});

				return result;
			});
	};
}
export function requestDeleteParticipation (id) {
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
				'Content-Type': 'application/x-www-form-urlencoded'
				// 'token': JSON.stringify(getCookie('token')
			},
			body: queryString.stringify(params)
		})
			.then(response => response.json())
			.then((json) => {
				const { result } = json;

				if (result) {
					dispatch(setParticipations(result));
				}

				dispatch({
					type: participationConstants.STOP_DELETE_PARTICIPATION
				});

				return json;
			})
			.catch((result) => {
				dispatch({
					type: participationConstants.STOP_DELETE_PARTICIPATION
				});

				return result;
			});
	};
}

export function requestGetParticipations () {
	return dispatch => {
		dispatch({
			type: participationConstants.REQUEST_GET_PARTICIPATIONS
		});

		return fetch(`${constants.API.ROOT}${constants.API.ACTIONS.PARTICIPATION}`, {
			method: constants.API.METHODS.GET,
			headers: {
				// 'token': JSON.stringify(getCookie('token')
			}
		})
			.then(response => response.json())
			.then((json) => {
				const { result } = json;

				if (result) {
					dispatch(setParticipations(result));
				}

				dispatch({
					type: participationConstants.STOP_GET_PARTICIPATIONS
				});

				return json;
			})
			.catch((result) => {
				dispatch({
					type: participationConstants.STOP_GET_PARTICIPATIONS
				});

				return result;
			});
	};
}

export function setParticipations (result) {
	return {
		type: participationConstants.SET_PARTICIPATIONS,
		result
	};
}
