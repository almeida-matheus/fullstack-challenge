import React, {
	Component
} from 'react';

export default class InputTextComponent extends Component {
	onChange = (e) => {
		this.props.onChange(e.target.value);
	}

	render () {
		const {
			err,
			placeholder
		} = this.props;

		const inputClassName = `input-text ${err ? 'danger' : false}`;

		return (
			<input
				className={inputClassName}
				type="text"
				placeholder={placeholder}
				onChange={this.onChange}
			/>
		);
	}
}
