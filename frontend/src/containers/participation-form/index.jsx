import React, {
	Component
} from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import ButtonComponent from '../../components/button';
import InputComponent from '../../components/input';
import constants from '../../constants';
import * as participationActions from '../../actions/participation';

class ParticipationForm extends Component {
	render () {
		const {
			values,
			touched,
			errors,
			isSubmitting,
			handleChange,
			handleBlur,
			handleSubmit,
			isFetchingPost
		} = this.props;

		return (
			<form
				onSubmit={handleSubmit}
				className='form-container'
			>

				<InputComponent
					id='firstName'
					placeholder='First name'
					type='text'
					value={values.firstName}
					onChange={handleChange}
					onBlur={handleBlur}
					err={errors.firstName && touched.firstName}
					label={errors.firstName}
				/>

				<InputComponent
					id='lastName'
					placeholder='Last name'
					type='text'
					value={values.lastName}
					onChange={handleChange}
					onBlur={handleBlur}
					err={errors.lastName && touched.lastName}
					label={errors.lastName}
				/>

				<InputComponent
					id='participation'
					placeholder='Participation'
					type='number'
					value={values.participation}
					onChange={handleChange}
					onBlur={handleBlur}
					err={false}
					min={1}
					max={100}
				/>

				<ButtonComponent
					type="submit"
					cssType="default"
					text="Send"
					isFetching={isFetchingPost}
					disabled={isSubmitting}
				/>
			</form>
		);
	}
}

const formikComponent = withFormik({
	mapPropsToValues: () => ({
		firstName: '',
		lastName: '',
		participation: 1
	}),
	validate: values => {
		const errors = {};

		if (!values.firstName) {
			errors.firstName = constants.MESSAGES.REQUIRED;
		} else if (values.firstName.length < 2 || values.firstName.length > 15) {
			errors.firstName = constants.MESSAGES.FIRST_NAME_LENGTH;
		}

		if (!values.lastName) {
			errors.lastName = constants.MESSAGES.REQUIRED;
		} else if (values.lastName.length < 2 || values.lastName.length > 15) {
			errors.lastName = constants.MESSAGES.LAST_NAME_LENGTH;
		}

		return errors;
	},
	handleSubmit: (values, { props, setSubmitting, resetForm }) => {
		const {
			participationActions,
			data
		} = props;

		const {
			isFetchingPost
		} = data;

		const {
			firstName,
			lastName,
			participation
		} = values;

		const body = {
			firstName,
			lastName,
			participation
		};

		if (!isFetchingPost) {
			participationActions.requestPostParticipation(body)
				.then((result) => {
					const {
						success,
						errors
					} = result;

					if (success) {
						resetForm();
					} else {
						errors.forEach((error) => {
							toast.error(`${error.param.toUpperCase()}: ${error.msg}`);
						});
					}
				})
				.catch(() => {
					toast.error(constants.MESSAGES.CATCH_ON_REQUEST);
				});
		}

		setSubmitting(false);
	},
	displayName: 'ParticipationForm'
})(ParticipationForm);

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

export default connect(mapStateToProps, mapDispatchToProps)(formikComponent);
