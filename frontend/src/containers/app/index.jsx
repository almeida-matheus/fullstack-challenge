import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';
import { subscribeToUpdateParticipations } from '../../socket';
import * as participationActions from '../../actions/participation';

class AppContainer extends Component {
	constructor (props) {
		super(props);

		subscribeToUpdateParticipations(this.handleOnUpdateParticipations);
	}

	handleOnUpdateParticipations = (err, response) => {
		const {
			participationActions
		} = this.props;

		if (response) {
			if (response.result) {
				participationActions.setParticipations(response.result);
			}
		}
	}

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

const mapDispatchToProps = (dispatch) => {
	return {
		participationActions: bindActionCreators(participationActions, dispatch)
	};
};

export default connect(null, mapDispatchToProps)(AppContainer);
