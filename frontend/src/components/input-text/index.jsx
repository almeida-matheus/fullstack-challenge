import React, {
	Component
} from 'react';

export default class InputTextComponent extends Component {
	render () {
		const {
			err
		} = this.props;

		const inputClassName = `input-text ${err ? 'danger' : false}`;

		return (
			<input
				className={inputClassName}
				type="text"
				placeholder={this.props.placeholder}
			/>
		);
	}
}
