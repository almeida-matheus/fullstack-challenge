import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import ChartComponent from '../../components/chart';
import TableComponent from '../../components/table';
import ButtonComponent from '../../components/button';
import InputComponent from '../../components/input';

import constants from '../../constants';

class AppContainer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			participation: 0,
			firstNameHasError: false,
			lastNameHasError: false
		};
	}

	handleClickSend = () =>  {
		this.setState({
			firstNameHasError: true,
			lastNameHasError: true
		});
	}

	onTypeText = (fieldKey, fieldValue) => {
		let state = {};
		state[fieldKey] = fieldValue;

		this.setState(state);

		this.validateForm(fieldKey, fieldValue);
	}

	validateForm = (fieldKey, fieldValue) => {
		let {
			firstNameHasError,
			lastNameHasError
		} = this.state;

		// let firstNameHasError = false;
		// let lastNameHasError = false;

		switch (fieldKey) {
			case 'firstName':
				if (fieldValue.length < 2 || fieldValue.length > 20) {
					firstNameHasError = true;
				} else {
					firstNameHasError = false;
				}

				break;

			case 'lastName':

				if (fieldValue.length < 2 || fieldValue.length > 20) {
					lastNameHasError = true;
				} else {
					lastNameHasError = false;
				}

				break;

			default:
				break;
		}

		this.setState({
			firstNameHasError,
			lastNameHasError
		})
	}

	render () {
		const {
			data
		} = this.props;

		console.log(data)

		const {
			firstNameHasError,
			lastNameHasError
		} = this.state;

		return (
			<div className='app-container'>
				<Navbar>
					<InputComponent
						type={"text"}
						placeholder="First name"
						err={firstNameHasError}
						onChange={(firstName) => this.onTypeText('firstName', firstName)}
						label={constants.formErrors.firstNameLength}
					/>
					<InputComponent
						type={"text"}
						placeholder="Last name"
						err={lastNameHasError}
						onChange={(lastName) => this.onTypeText('lastName', lastName)}
						label={constants.formErrors.lastNameLength}
					/>
					<InputComponent
						type={"number"}
						placeholder="Participation"
						err={false}
						onChange={(participation) => this.onTypeText('participation', participation)}
						min={1}
						max={100}
						value={2}
					/>
					<ButtonComponent
						text="Send"
						onClick={this.handleClickSend}
						onChange={(nameSignup) => this.setState({ nameSignup })}
					/>
				</Navbar>
				<Section>
					<div>
						<h1 className={'title'}> DATA </h1>
						<p className={'desc'}> Lorem ipsum dolor sit amet consectetur adipiscing elit </p>
					</div>
				</Section>
				<Section>
					<div
						className={'section-content'}
					>
						<TableComponent />
					</div>
					<div
						className={'section-content chart-container'}
					>
						<ChartComponent
							width={320}
							height={320}
						/>
					</div>
				</Section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.participations,
	};
};

export default connect(mapStateToProps)(AppContainer);
