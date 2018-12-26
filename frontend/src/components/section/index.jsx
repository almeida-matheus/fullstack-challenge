import React, { Component } from 'react';
class SectionComponent extends Component {
	render () {
		return (
			<section className={'section -striped -highlight'}>
				{
					this.props.children
				}
			</section>
		);
	}
}

export default SectionComponent;
