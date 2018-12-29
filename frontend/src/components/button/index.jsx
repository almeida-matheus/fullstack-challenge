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
			type,
			cssType,
			children
		} = this.props;

		return (
			<button
				className={`button ${cssType}`}
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
				{
					children
				}
			</button>
		);
	}
}
