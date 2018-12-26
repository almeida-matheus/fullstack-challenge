import participationsConstants from '../../redux-constants/participation';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	result: []
};

function participationReducer (state = initialState, action) {
	switch (action.type) {
		case participationsConstants.REQUEST_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});

		case participationsConstants.SET_PARTICIPATIONS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				result: action.result
			});

		default:
			return state;
	}
}

export default participationReducer;
