import React from 'react';
import ParticipationForm from './index.jsx';
import Teste from './teste.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

describe('<ParticipationForm />', () => {
	let wrapper, store;
	const initialState = {};
	const mockStore = configureStore();
	const isFetchingPost = false;

	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = shallow(
			<Provider store={store}>
				<ParticipationForm />
			</Provider>
		);
	});

	it('renders correctly', () => {
		// expect(wrapper).toMatchSnapshot();
	});

	it('teste', () => {
		console.log("-------------------------------------");
		console.log(wrapper.find('form'))
	});
});
