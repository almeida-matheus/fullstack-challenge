import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section from './index.jsx';

describe('<Section />', () => {
	const getWrapper = (child) => {
		return shallow((
			<Section>
				{
					child
				}
			</Section>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper((
			<div> teste </div>
		));
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has section component', () => {
		const wrapper = getWrapper();
		expect(wrapper.find('section').length).toBe(1);
	});
});
