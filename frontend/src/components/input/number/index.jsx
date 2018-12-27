import React, {
	Component
} from 'react';
import * as NumericInput from "react-numeric-input";

export default class InputNumberComponent extends Component {
	onChange = (value) => {
		this.props.onChange(value);
	}

	render () {
		const {
			min,
			max,
			value,
			placeholder,
			err
		} = this.props;

		const inputClassName = `input-number ${err ? 'danger' : false}`;

		return (
			<div className={'input-number-container'}>
				<NumericInput
					min={min}
					max={max}
					value={value}
					placeholder={placeholder}
					className={inputClassName}
					strict
					mobile
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
