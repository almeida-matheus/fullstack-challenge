// import React from 'react';
// import ReactDOM from 'react-dom';
import Teste from './teste.jsx';
import { shallow } from 'enzyme';

describe('AppContainer', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Teste />);
		expect(wrapper).toMatchSnapshot();
	});
});
