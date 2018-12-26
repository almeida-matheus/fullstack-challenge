import React, {
	Component
} from 'react';
import ReactTable from 'react-table';

export default class TableComponent extends Component {
	render () {
		const {
			data,
			columns
		} = this.props;

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
