import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppContainer from './index.jsx';

describe('<AppContainer />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<AppContainer />);
	});

	it('renders correctly', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
