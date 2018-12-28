import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from './index.jsx';

describe('<Table />', () => {
	const modelI = {
		showPaginationBottom: true,
		showPageSizeOptions: false,
		defaultPageSize: 4,
		showPageJump: false,
		loadingText: '',
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
		]
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
