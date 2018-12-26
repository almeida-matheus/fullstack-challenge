import React, {
	Component
} from 'react';
import style from './style.styl';

export default class InputTextComponent extends Component {
	render () {
		const {
			err
		} = this.props;

		const inputClassName = `${style['input-text']} ${err ? style.danger : false}`;

		return (
			<input
				className={inputClassName}
				type="text"
				placeholder={this.props.placeholder}
			/>
		);
	}
}
