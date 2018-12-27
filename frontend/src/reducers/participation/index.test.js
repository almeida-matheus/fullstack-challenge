import participationReducer from './index.js';
import participationConstants from '../../redux-constants/participation';

describe('Participation Reducer', () => {
	it('should return the initial state', () => {
		expect(participationReducer(undefined, {})).toEqual({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});
	});

	it('should return isFetchingGet true', () => {
		expect(participationReducer(undefined, {
			type: participationConstants.REQUEST_GET_PARTICIPATIONS
		})).toEqual({
			isFetchingGet: true,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});
	});

	it('should return isFetchingGet false', () => {
		expect(participationReducer(undefined, {
			type: participationConstants.STOP_GET_PARTICIPATIONS
		})).toEqual({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});
	});

	it('should return isFetchingPost true', () => {
		expect(participationReducer(undefined, {
			type: participationConstants.REQUEST_POST_PARTICIPATION
		})).toEqual({
			isFetchingGet: false,
			isFetchingPost: true,
			didInvalidate: false,
			result: []
		});
	});

	it('should return isFetchingPost false', () => {
		expect(participationReducer(undefined, {
			type: participationConstants.STOP_POST_PARTICIPATION
		})).toEqual({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});
	});

	it('should return array result', () => {
		expect(participationReducer(undefined, {
			type: participationConstants.SET_PARTICIPATIONS,
			result: [
				{
					firstName: 'TesteI FirstName',
					lastName: 'TesteI LastName',
					participation: 50
				}
			]
		})).toEqual({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: [
				{
					firstName: 'TesteI FirstName',
					lastName: 'TesteI LastName',
					participation: 50
				}
			]
		});
	});
});
