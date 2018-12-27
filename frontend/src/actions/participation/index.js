import participationConstants from '../../redux-constants/participation';
import constants from '../../constants';
import queryString from 'querystring';

export function postParticipation (params) {
	return dispatch => {
		dispatch({
			type: participationConstants.POST_PARTICIPATIONS
		});
		console.log("POST")
		console.log(queryString.stringify(params))

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
			console.log("POST >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
			console.log(json)
			const { result } = json;
			dispatch(setParticipations(result));
		})
		.catch(() => {
			// dispatch(globalNotificationActions.SendNotification(mainConstants.NOTIFICATIONS.TYPES.ERROR, mainConstants.NOTIFICATIONS.REQUEST_ERROR));
			// dispatch({
			// 	type: pageConstants.REQUEST_ERROR
			// });
		});
	}
}

export function requestParticipations () {
	return dispatch => {
		dispatch({
			type: participationConstants.REQUEST_PARTICIPATIONS
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
			dispatch(setParticipations(result));
		})
		.catch(() => {
			// dispatch(globalNotificationActions.SendNotification(mainConstants.NOTIFICATIONS.TYPES.ERROR, mainConstants.NOTIFICATIONS.REQUEST_ERROR));
			// dispatch({
			// 	type: pageConstants.REQUEST_ERROR
			// });
		});
	};
}

export function setParticipations (result) {
	return {
		type: participationConstants.SET_PARTICIPATIONS,
		result
	};
}
