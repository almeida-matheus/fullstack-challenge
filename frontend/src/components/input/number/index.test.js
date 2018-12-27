import React from 'react';
import Number from './index.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

describe('<Number />', () => {
	const onChange = sinon.spy();
	const onBlur = sinon.spy();

	const modelI = {
		min: 1,
		max: 100,
		value: 'value',
		placeholder: 'Participation',
		err: false,
		id: 'participation',
		onChange: onChange,
		onBlur: onBlur
	};

	const getWrapper = (model) => {
		return shallow((
			<Number {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('blur and change events is working', () => {
		const wrapper = getWrapper(modelI);
		wrapper.find('NumericInput').simulate('blur');
		wrapper.find('NumericInput').simulate('change');
		expect(onChange.called).toBe(true);
		expect(onBlur.called).toBe(true);
	});
});
