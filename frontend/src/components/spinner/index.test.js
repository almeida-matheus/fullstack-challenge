import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from './index.jsx';

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
