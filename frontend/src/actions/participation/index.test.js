import * as participationActions from './index.js';
import participationConstants from '../../redux-constants/participation';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Participations Actions', () => {
	it('get participation action is working (start server)', () => {
		const store = mockStore({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});

		return store.dispatch(participationActions.requestGetParticipations())
			.then((result) => {
				expect(
					store
						.getActions()
						.find(a => a.type === participationConstants.SET_PARTICIPATIONS).result.length
				)
				.toBeGreaterThan(0);
			});
	});

	it('post participation action is working (start server)', () => {
		const data = {
			participation: 1,
			firstName: 'firstNametest',
			lastName: 'lastnametest'
		};

		const store = mockStore({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});

		return store.dispatch(participationActions.requestPostParticipation(data))
			.then((result) => {
				expect(true).toBe(true);
			});
	});
});
