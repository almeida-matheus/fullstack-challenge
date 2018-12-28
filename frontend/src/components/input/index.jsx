import React, {
	Component
} from 'react';

import NumberComponent from './number';
import TextComponent from './text';

class InputComponent extends Component {
	render () {
		const {
			type,
			err,
			label,
			id
		} = this.props;

		let inputComponent = null;

		switch (type) {
			case 'text':
				inputComponent = (<TextComponent {...this.props} />);
				break;
			case 'number':
				inputComponent = (<NumberComponent {...this.props} />);
				break;
			default:
				inputComponent = null;
				break;
		}

		return (
			<div className='input-form-container'>
				{
					inputComponent
				}
				{
					err ? (
						<label
							className='error-label'
							htmlFor={id}
						>
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

export default InputComponent;
