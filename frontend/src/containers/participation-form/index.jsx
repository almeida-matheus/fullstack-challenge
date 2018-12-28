import React, {
	Component
} from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
			errors.firstName = constants.FORM_ERRORS.REQUIRED;
		} else if (values.firstName.length < 2 || values.firstName.length > 20) {
			errors.firstName = constants.FORM_ERRORS.FIRST_NAME_LENGTH;
		}

		if (!values.lastName) {
			errors.lastName = constants.FORM_ERRORS.REQUIRED;
		} else if (values.lastName.length < 2 || values.lastName.length > 20) {
			errors.lastName = constants.FORM_ERRORS.LAST_NAME_LENGTH;
		}

		return errors;
	},
	handleSubmit: (values, { props, setSubmitting, resetForm }) => {
		const {
			participationActions
		} = props;

		const {
			firstName,
			lastName,
			participation
		} = values;

		const data = {
			firstName,
			lastName,
			participation
		};

		participationActions.requestPostParticipation(data)
			.then(() => {
				resetForm();
			});
		setSubmitting(false);
	},
	displayName: 'ParticipationForm'
})(ParticipationForm);

const mapDispatchToProps = (dispatch) => {
	return {
		participationActions: bindActionCreators(participationActions, dispatch)
	};
};

export default connect(null, mapDispatchToProps)(formikComponent);
