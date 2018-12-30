import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from './index.jsx';

describe('<Table />', () => {
	const modelI = {
		maxParticipation: 100,
		columns: [
			{
				Header: 'First name',
				accessor: 'firstName'
			},
			{
				Header: 'Last name',
				accessor: 'lastName'
			},
			{
				Header: 'Participation',
				accessor: 'participation'
			}
		],
		data: [
			{
				firstName: 'TesteI name',
				lastName: 'TesteI lastName',
				participation: '50'
			},
			{
				firstName: 'TesteII name',
				lastName: 'TesteII lastName',
				participation: '50'
			}
		],
		handleDelete: () => {}
	};

	const getWrapper = (model) => {
		return shallow((
			<Table {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
