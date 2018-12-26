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
			placeholder,
			label
		} = this.props;

		const inputClassName = `input-text ${err ? 'danger' : false}`;

		return (
			<div className={'input-form-container'}>
				<input
					className={inputClassName}
					type="text"
					placeholder={placeholder}
					onChange={this.onChange}
				/>
				{
					err ? (
						<label className={'error-label'}>
							{
								label
							}
						</label>
					) : null
				}
			</div>
		);
	}
}
