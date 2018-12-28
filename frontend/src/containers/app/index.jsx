import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import * as participationActions from '../../actions/participation';

class AppContainer extends Component {
	componentDidMount () {
		// toast.error("Error Notification ! asd asd asd asd asd asd asd asd asdas das dasd as dasd asd asda d", {
		// 	position: toast.POSITION.TOP_RIGTH,
		// 	draggable: false,
		// 	pauseOnHover: true,
		// 	pauseOnVisibilityChange: true,
		// 	rtl: false,
		// 	closeOnClick: false,
		// 	newestOnTop: false,
		// 	hideProgressBar: false,
		// 	autoClose: 10000
		// });
		// toast.error("Error Notification !", {
		// 	position: toast.POSITION.TOP_RIGTH,
		// 	draggable: false,
		// 	pauseOnHover: true,
		// 	pauseOnVisibilityChange: true,
		// 	rtl: false,
		// 	closeOnClick: false,
		// 	newestOnTop: false,
		// 	hideProgressBar: false,
		// 	autoClose: 10000
		// });
		// toast.error("Error Notification !", {
		// 	position: toast.POSITION.TOP_RIGTH,
		// 	draggable: false,
		// 	pauseOnHover: true,
		// 	pauseOnVisibilityChange: true,
		// 	rtl: false,
		// 	closeOnClick: false,
		// 	newestOnTop: false,
		// 	hideProgressBar: false,
		// 	autoClose: 10000
		// });

	}

	render () {
		

		return (
			<ToastContainer />
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
