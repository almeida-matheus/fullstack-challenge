import participationConstants from '../../redux-constants/participation';

const initialState = {
	isFetchingGet: false,
	isFetchingPost: false,
	didInvalidate: false,
	result: []
};

function participationReducer (state = initialState, action) {
	switch (action.type) {
		case participationConstants.REQUEST_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetchingGet: true,
				didInvalidate: false
			});

		case participationConstants.POST_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetchingPost: true,
				didInvalidate: false
			});

		case participationConstants.SET_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetchingGet: false,
				didInvalidate: false,
				result: action.result
			});

		default:
			return state;
	}
}

export default participationReducer;
