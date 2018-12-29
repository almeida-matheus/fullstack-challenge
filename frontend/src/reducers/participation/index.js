import participationConstants from '../../redux-constants/participation';

const initialState = {
	isFetchingGet: false,
	isFetchingPost: false,
	didInvalidate: false,
	result: []
};

function participationReducer (state = initialState, action) {
	switch (action.type) {
		case participationConstants.REQUEST_GET_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetchingGet: true,
				didInvalidate: false
			});

		case participationConstants.REQUEST_POST_PARTICIPATION:
			return Object.assign({}, state, {
				isFetchingPost: true,
				didInvalidate: false
			});

		case participationConstants.STOP_POST_PARTICIPATION:
			return Object.assign({}, state, {
				isFetchingPost: false,
				didInvalidate: false
			});

		case participationConstants.REQUEST_DELETE_PARTICIPATION:
			return Object.assign({}, state, {
				didInvalidate: false
			});

		case participationConstants.STOP_DELETE_PARTICIPATION:
			return Object.assign({}, state, {
				didInvalidate: false
			});

		case participationConstants.SET_PARTICIPATIONS:
			return Object.assign({}, state, {
				didInvalidate: false,
				result: action.result
			});

		case participationConstants.STOP_GET_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetchingGet: false,
				didInvalidate: false
			});

		default:
			return state;
	}
}

export default participationReducer;
