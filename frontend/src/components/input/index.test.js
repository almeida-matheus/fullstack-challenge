import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import Input from './index.jsx';

describe('<Input />', () => {
	const onChange = sinon.spy();
	const onBlur = sinon.spy();

	const modelI = {
		id: 'lastName',
		placeholder: 'Last name',
		type: 'text',
		value: 'value',
		onChange,
		onBlur,
		err: true,
		label: 'erro teste'
	};

	const modelII = {
		id: 'participation',
		placeholder: 'Participation',
		type: 'number',
		value: 'value',
		onChange,
		onBlur,
		err: false,
		min: 1,
		max: 100
	};

	const getWrapper = (model) => {
		return shallow((
			<Input {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has InputTextComponent component', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('InputTextComponent').length).toBe(1);
	});

	it('has a error label when err param is true', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('label.error-label').length).toBe(1);
	});

	it('has no error label when err param is true', () => {
		const wrapper = getWrapper(modelII);
		expect(wrapper.find('label.error-label').length).toBe(0);
	});

	it('blur and change events is working', () => {
		const wrapper = getWrapper(modelI);
		wrapper.find('InputTextComponent').simulate('blur');
		wrapper.find('InputTextComponent').simulate('change');
		expect(onChange.called).toBe(true);
		expect(onBlur.called).toBe(true);
	});
});
