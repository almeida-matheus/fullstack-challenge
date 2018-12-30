import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import ChartComponent from '../../components/chart';
import ButtonComponent from '../../components/button';
import TableComponent from '../../components/table';
import SpinnerComponent from '../../components/spinner';
import ParticpationForm from '../participation-form';
import * as participationActions from '../../actions/participation';
import constants from '../../constants';

class HomeContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tableParams: {
				itemsByPage: 5,
				maxParticipation: 100,
				columns: [
					'First Name',
					'Last Name',
					'Participation'
				],
				handleDelete: this.handleDeleteParticipation
			}
		};
	}

	componentDidMount () {
		const {
			participationActions
		} = this.props;

		participationActions
			.requestGetParticipations()
			.catch(() => {
				toast.error(constants.MESSAGES.CATCH_ON_REQUEST);
			});
	}

	handleDeleteParticipation = (model, deleteCallBack) => {
		const {
			participationActions
		} = this.props;

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui'>
						<h1> Are you sure? </h1>
						<p> You want to delete this data? </p>
						<div className='buttons-container'>
							<ButtonComponent
								type="button"
								cssType="default"
								text="No"
								isFetching={false}
								disabled={false}
								onClick={onClose}
							/>
							<ButtonComponent
								type="button"
								cssType="default"
								text="Yes"
								disabled={false}
								onClick={() => {
									participationActions.requestDeleteParticipation(model.id)
										.catch(() => toast.error(constants.MESSAGES.CATCH_ON_REQUEST))
										.finally(() => {
											deleteCallBack();
											onClose();
										});
								}}
							/>
						</div>
					</div>
				);
			}
		});
	}

	render () {
		let chartData = [];
		let chartLabels = [];
		let chartColors = [];

		const {
			data
		} = this.props;

		const {
			result,
			isFetchingGet,
			isFetchingPost
		} = data;

		const {
			tableParams
		} = this.state;

		chartData = result.map((model) => model.participation);
		chartLabels = result.map((model) => `${model.firstName} ${model.lastName}`);
		chartColors = result.map((model) => model.color);

		return (
			<div className='home-container'>
				<Navbar>
					<ParticpationForm isFetchingPost={isFetchingPost} />
				</Navbar>
				<Section>
					<div className='section-desc-container'>
						<h1 className='title'>
							{
								constants.HOME.TITLE
							}
						</h1>
						<p className='sub-title'>
							{
								constants.HOME.SUBTITLE
							}
						</p>
					</div>
				</Section>
				<Section>
					<div
						className='section-content table-container'
					>
						{
							isFetchingGet ? (
								<SpinnerComponent
									type='medium'
								/>
							)
								: (
									<TableComponent
										data={result}
										{...tableParams}
									/>
								)
						}
					</div>
					<div
						className='section-content chart-container'
					>
						{
							isFetchingGet ? (
								<SpinnerComponent
									type='medium'
								/>
							)
								:	(
									<ChartComponent
										width={280}
										height={280}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
