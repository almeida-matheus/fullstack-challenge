import React, {
	Component
} from 'react';
import style from './style.styl';

export default class ButtonComponent extends Component {
	render () {
		return (
			<button className={`${style.button} ${style.default}`}>
				{
					this.props.text.toUpperCase()
				}
			</button>
		);
	}
}
