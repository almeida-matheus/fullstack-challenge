import React, { Component } from 'react';

class SpinnerComponent extends Component {
	render () {
		const {
			type
		} = this.props;

		return (
			<div className={`spinner ${type}`}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
}

export default SpinnerComponent;
