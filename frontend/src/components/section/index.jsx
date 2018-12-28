import React, { Component } from 'react';
class SectionComponent extends Component {
	render () {
		const {
			children
		} = this.props;

		return (
			<section className='section -striped -highlight'>
				{
					children
				}
			</section>
		);
	}
}

export default SectionComponent;
