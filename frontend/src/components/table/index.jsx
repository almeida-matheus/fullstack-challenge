import React, {
	Component
} from 'react';
import ReactTable from 'react-table';
import constants from '../../constants';

export default class TableComponent extends Component {
	render () {
		const {
			data,
			columns,
			showPaginationBottom,
			showPageSizeOptions,
			defaultPageSize,
			showPageJump,
			loadingText
		} = this.props;

		if (data.length > 0) {
			return (
				<ReactTable
					data={data}
					columns={columns}
					showPaginationBottom={showPaginationBottom}
					showPageSizeOptions={showPageSizeOptions}
					defaultPageSize={defaultPageSize}
					showPageJump={showPageJump}
					loadingText={loadingText}
					className='table'
				/>
			);
		}

		return (
			<div className="label error">
				{
					constants.MESSAGES.IS_EMPTY
				}
			</div>
		);
	}
}
