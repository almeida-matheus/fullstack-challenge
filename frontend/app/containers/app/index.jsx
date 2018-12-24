import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';

class AppContainer extends Component {
	render () {
		// const {
		// 	data
		// } = this.props;


		return (
			<div>
				<Navbar />
				<Section>

				</Section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.artists,
	};
};

export default connect(mapStateToProps)(AppContainer);
