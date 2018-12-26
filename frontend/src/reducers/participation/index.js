import participationsConstants from '../../redux-constants/participation';

const initialState = {
	isFetching: false,
	result: [

	]
};

function participationReducer (state = initialState, action) {
	switch (action.type) {
		case participationsConstants.GET_PARTICIPATIONS:
			return state;

		default:
			return state;
	}
}

export default participationReducer;
