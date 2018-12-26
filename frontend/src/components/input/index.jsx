import React, {
	Component
} from 'react';

import NumberComponent from './number';
import TextComponent from './text';

class InputComponent extends Component {
	render () {
		const {
			type
		} = this.props;

		switch (type) {
			case 'text':
				return (<TextComponent {...this.props} />);
			case 'number':
				return (<NumberComponent {...this.props} />);
			default:
				return null;
		}
	}
}

export default InputComponent;
