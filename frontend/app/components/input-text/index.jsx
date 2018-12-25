import React, {
	Component
} from 'react';
import style from './style.styl';

export default class InputTextComponent extends Component {
	render () {
		return (
			<input
				className={`${style['input-text']}`}
				type="text"
				placeholder={this.props.placeholder}
			/>
		);
	}
}
