import React, {
	Component
} from 'react';

export default class ButtonComponent extends Component {
	render () {
		const {
			onClick,
			text
		} = this.props;

		return (
			<button
				className={'button default'}
				onClick={onClick}
			>
				{
					text.toUpperCase()
				}
			</button>
		);
	}
}
