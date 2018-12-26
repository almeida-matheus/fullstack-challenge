import React, {
	Component
} from 'react';
import ReactTable from 'react-table';

export default class TableComponent extends Component {
	render () {
		const data = [
			{
				firstName: 'Shane',
				lastName: 'Andersen',
				participation: '21%'
			},
			{
				firstName: 'Izabela',
				lastName: 'Pruitt',
				participation: '22%'
			},
			{
				firstName: 'Lily-Anne',
				lastName: 'Andrade',
				participation: '18%'
			},
			{
				firstName: 'Taha',
				lastName: 'Dalton',
				participation: '10%'
			},
			{
				firstName: 'Dione',
				lastName: 'Howells',
				participation: '12%'
			},
			{
				firstName: 'Keon',
				lastName: 'Mcconnell',
				participation: '13%'
			},
			{
				firstName: 'Rohaan',
				lastName: 'Cain',
				participation: '14%'
			},
			{
				firstName: 'Zayna',
				lastName: 'Rosario',
				participation: '15%'
			},
			{
				firstName: 'Lillie-Mae',
				lastName: 'Vega',
				participation: '16%'
			},
			{
				firstName: 'Tudor',
				lastName: 'Mcknight',
				participation: '19%'
			}
		];

		const columns = [
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
		];

		return (
			<ReactTable
				data={data}
				columns={columns}
				showPaginationBottom
				showPageSizeOptions={false}
				defaultPageSize={4}
				showPageJump={false}
				loadingText=''
				className={'table'}
			/>
		);
	}
}
