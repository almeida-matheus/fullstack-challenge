import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Section from '../../components/section';
import Navbar from '../../components/navbar';
import ChartComponent from '../../components/chart';
import TableComponent from '../../components/table';
import SpinnerComponent from '../../components/spinner';
import ParticpationForm from '../participation-form';
import * as participationActions from '../../actions/participation';

class AppContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			tableParams: {
				showPaginationBottom: true,
				showPageSizeOptions: false,
				defaultPageSize: 4,
				showPageJump: false,
				loadingText: '',
				columns: [
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
				]
			}
		};
	}

	componentDidMount () {
		const {
			participationActions
		} = this.props;

		participationActions.requestGetParticipations();
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
			<div className='app-container'>
				<Navbar>
					<ParticpationForm isFetchingPost={isFetchingPost} />
				</Navbar>
				<Section>
					<div className='section-desc-container'>
						<h1 className='title'> DATA </h1>
						<p className='desc'> Lorem ipsum dolor sit amet consectetur adipiscing elit </p>
					</div>
				</Section>
				<Section>
					<div
						className='section-content'
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
