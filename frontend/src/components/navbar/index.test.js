import React from 'react';
import Navbar from './index.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Navbar />', () => {
	const getWrapper = (child) => {
		return shallow((
			<Navbar>
				{
					child
				}
			</Navbar>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper((
			<div>
				teste
			</div>
		));
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has nav component', () => {
		const wrapper = getWrapper();
		expect(wrapper.find('nav').length).toBe(1);
	});
});
