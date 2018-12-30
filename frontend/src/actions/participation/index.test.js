import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as participationActions from './index.js';
import participationConstants from '../../redux-constants/participation';

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
			.then(() => {
				expect(
					Array.isArray(store
						.getActions()
						.find(a => a.type === participationConstants.SET_PARTICIPATIONS).result)
				).toBe(true);
			});
	});

	it('post participation action is working (start server)', () => {
		const data = {
			participation: 1,
			firstName: 'Teste jest',
			lastName: 'Teste jest'
		};

		const store = mockStore({
			isFetchingGet: false,
			isFetchingPost: false,
			didInvalidate: false,
			result: []
		});

		return store.dispatch(participationActions.requestPostParticipation(data))
			.then((response) => {
				expect(Array.isArray(response.result)).toBe(true);
			});
	});
});
