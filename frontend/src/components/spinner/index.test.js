import React from 'react';
import Spinner from './index.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Spinner />', () => {
	const modelI = {
		type: 'small'
	};

	const getWrapper = (model) => {
		return shallow((
			<Spinner {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
