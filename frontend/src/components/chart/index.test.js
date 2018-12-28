import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Chart from './index.jsx';

describe('<Chart />', () => {
	const modelI = {
		width: 100,
		height: 100,
		data: [
			1,
			2,
			3
		],
		labels: [
			'I',
			'II',
			'III'
		],
		colors: [
			'red',
			'blue',
			'green'
		]
	};

	const getWrapper = (model) => {
		return shallow((
			<Chart {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
