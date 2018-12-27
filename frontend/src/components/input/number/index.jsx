import React, {
	Component
} from 'react';

import NumericInput from "react-numeric-input";

export default class InputNumberComponent extends Component {
	handleChange = (value) => {
		const {
			id,
			onChange
		} = this.props;

		const event = {
			target: {
				value,
				id
			}
		};

		onChange(event);
	}

	handleBlur = (value) => {
		const {
			id,
			onBlur
		} = this.props;

		const event = {
			target: {
				value,
				id
			}
		};

		onBlur(event);
	}

	render () {
		const {
			min,
			max,
			value,
			placeholder,
			err,
			id
		} = this.props;
		const inputClassName = `input-number ${err ? 'danger' : false}`;

		return (
			<div className={'input-number-container'}>
				<NumericInput
					id={id}
					name={id}
					placeholder={placeholder}
					value={value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					min={min}
					max={max}
					className={inputClassName}
					strict
					mobile
				/>
			</div>
		);
	}
}
