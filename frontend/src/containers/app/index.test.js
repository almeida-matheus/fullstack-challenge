import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import AppContainer from './index.jsx';

describe('<AppContainer />', () => {
	let store;
	let wrapper;

	beforeEach(() => {
		store = configureStore();
		wrapper = shallow(
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	});

	it('renders correctly', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
