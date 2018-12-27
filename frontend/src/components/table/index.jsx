import React, {
	Component
} from 'react';
import ReactTable from 'react-table';

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

		return (
			<ReactTable
				data={data}
				columns={columns}
				showPaginationBottom={showPaginationBottom}
				showPageSizeOptions={showPageSizeOptions}
				defaultPageSize={defaultPageSize}
				showPageJump={showPageJump}
				loadingText={loadingText}
				className={'table'}
			/>
		);
	}
}
