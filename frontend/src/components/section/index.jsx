import React, { Component } from 'react';
import style from './style.styl';

class SectionComponent extends Component {

	render () {
		return (
			<section className={`${style.section} -striped -highlight`}>
				{
					this.props.children
				}
			</section>
		);
	}
}

export default SectionComponent;
