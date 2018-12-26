import React, {
	Component
} from 'react';

export default class ButtonComponent extends Component {
	render () {
		return (
			<button className={'button default'}>
				{
					this.props.text.toUpperCase()
				}
			</button>
		);
	}
}
