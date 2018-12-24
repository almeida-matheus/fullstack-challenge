import React, { Component } from 'react';
import style from './style.styl';

class SectionComponent extends Component {

	render () {
		return (
			<section className={`${style.section}`}>
				<span>
					Teste
				</span>
				{
					this.props.children
				}
			</section>
		);
	}
}

export default SectionComponent;
