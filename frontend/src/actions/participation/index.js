import participationActions from '../../redux-constants/participation';

export function requestParticipations () {
	return dispatch => {
		dispatch({
			type: participationActions.REQUEST_PARTICIPATIONS
		});

		return fetch('http://localhost:7070/participation', {
			method: 'GET', // mainConstants.HTTP_METHODS.GET
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
		type: participationActions.SET_PARTICIPATIONS,
		result
	};
}
