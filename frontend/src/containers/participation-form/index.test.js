import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ParticipationForm from './index.jsx';

describe('<ParticipationForm />', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<ParticipationForm />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
