import React, {
	Component
} from 'react';
import * as NumericInput from "react-numeric-input";

export default class InputNumberComponent extends Component {
	onChange = (e) => {
		this.props.onChange(e.target.value);
	}

	render () {
		const {
			min,
			max,
			value,
			placeholder
		} = this.props;

		return (
			<NumericInput
				min={min}
				max={max}
				value={value}
				placeholder={placeholder}
				className={"input-number"}
				strict
			/>
		);
	}
}
