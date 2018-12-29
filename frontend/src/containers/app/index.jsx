import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';
import * as participationActions from '../../actions/participation';

class AppContainer extends Component {
	render () {
		return (
			<ToastContainer
				autoClose={10000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnVisibilityChange
				pauseOnHover
				draggable={false}
				position="top-right"
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.participations,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		participationActions: bindActionCreators(participationActions, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
