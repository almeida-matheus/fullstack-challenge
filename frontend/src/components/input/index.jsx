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
			label
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
						<span
							className='error-label'
						>
							{
								label
							}
						</span>
					) : null
				}
			</div>
		);
	}
}

export default InputComponent;
