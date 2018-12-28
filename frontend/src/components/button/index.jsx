import React, {
	Component
} from 'react';
import SpinnerComponent from '../spinner';

export default class ButtonComponent extends Component {
	render () {
		const {
			onClick,
			text,
			isFetching,
			type
		} = this.props;

		return (
			<button
				className='button default'
				onClick={onClick}
				type={type}
			>
				{
					isFetching ? (
						<SpinnerComponent
							type='small'
						/>
					) : (
						text.toUpperCase()
					)
				}
			</button>
		);
	}
}
