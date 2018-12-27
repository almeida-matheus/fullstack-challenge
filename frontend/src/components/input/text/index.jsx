import React, {
	Component
} from 'react';

export default class InputTextComponent extends Component {
	render () {
		const {
			err,
			placeholder,
			value,
			id,
			onChange,
			onBlur
		} = this.props;

		const inputClassName = `input-text ${err ? 'danger' : false}`;

		return (
			<input
				className={inputClassName}
				type="text"
				placeholder={placeholder}
				value={value}
				id={id}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
	}
}
