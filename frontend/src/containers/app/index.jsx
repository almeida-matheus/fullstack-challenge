import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import ChartComponent from '../../components/chart';
import TableComponent from '../../components/table';
import ButtonComponent from '../../components/button';
import InputComponent from '../../components/input';
import SpinnerComponent from '../../components/spinner';
import * as participationActions from '../../actions/participation';

import constants from '../../constants';

class AppContainer extends Component {
	constructor (props) {
		super(props);

		const {
			participationActions
		} = this.props;

		this.state = {
			firstName: '',
			lastName: '',
			participation: 1,
			firstNameHasError: false,
			lastNameHasError: false
		};

		participationActions.requestParticipations();
	}

	handleClickSend = () =>  {
		const {
			participationActions
		} = this.props;

		const {
			firstName,
			lastName,
			participation
		} = this.state;

		const data = {
			firstName,
			lastName,
			participation
		}

		participationActions.postParticipation(data);
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
		let chartData = [];
		let chartLabels = [];
		let chartColors = [];

		const {
			data
		} = this.props;

		const {
			participation
		} = this.state;

		const {
			result,
			isFetchingGet,
			isFetchingPost
		} = data;

		const columns = [
			{
				Header: 'First name',
				accessor: 'firstName'
			},
			{
				Header: 'Last name',
				accessor: 'lastName'
			},
			{
				Header: 'Participation',
				accessor: 'participation'
			}
		];

		const {
			firstNameHasError,
			lastNameHasError
		} = this.state;

		chartData = result.map((model) => model.participation);
		chartLabels = result.map((model) => `${model.firstName } ${model.lastName}`);
		chartColors = result.map((model) => model.color);

		return (
			<div className='app-container'>
				<Navbar>
					<InputComponent
						type={"text"}
						placeholder="First name"
						err={firstNameHasError}
						onChange={(firstName) => this.onTypeText('firstName', firstName)}
						label={constants.FORM_ERRORS.FIRST_NAME_LENGTH}
					/>
					<InputComponent
						type={"text"}
						placeholder="Last name"
						err={lastNameHasError}
						onChange={(lastName) => this.onTypeText('lastName', lastName)}
						label={constants.FORM_ERRORS.LAST_NAME_LENGTH}
					/>
					<InputComponent
						type={"number"}
						placeholder="Participation"
						err={false}
						onChange={(participation) => this.onTypeText('participation', participation)}
						min={1}
						max={100}
						value={participation}
					/>
					<ButtonComponent
						text="Send"
						onClick={this.handleClickSend}
						onChange={(nameSignup) => this.setState({ nameSignup })}
						isFetching={isFetchingPost}
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
						{
							isFetchingGet ? (
								<SpinnerComponent
									type={'medium'}
								/>
							) :
							(
								<TableComponent
									columns={columns}
									data={result}
								/>
							)
						}
					</div>
					<div
						className={'section-content chart-container'}
					>
						{
							isFetchingGet ? (
								<SpinnerComponent
									type={'medium'}
								/>
							) :
							(
								<ChartComponent
									width={320}
									height={320}
									data={chartData}
									labels={chartLabels}
									colors={chartColors}
								/>
							)
						}

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

const mapDispatchToProps = (dispatch) => {
	return {
		participationActions: bindActionCreators(participationActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
