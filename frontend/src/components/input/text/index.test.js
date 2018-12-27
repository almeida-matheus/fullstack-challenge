import React from 'react';
import Text from './index.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

describe('<Text />', () => {
	const onChange = sinon.spy();
	const onBlur = sinon.spy();

	const modelI = {
		err: true,
		placeholder: 'Last name',
		value: 'value',
		id: 'lastName',
		onChange: onChange,
		onBlur: onBlur
	};

	const getWrapper = (model) => {
		return shallow((
			<Text {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('blur and change events is working', () => {
		const wrapper = getWrapper(modelI);
		wrapper.simulate('blur');
		wrapper.simulate('change');
		expect(onChange.called).toBe(true);
		expect(onBlur.called).toBe(true);
	});
});
