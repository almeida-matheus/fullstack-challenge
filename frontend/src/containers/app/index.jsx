// import React, { Component } from 'react';
//
//
// class AppContainer extends Component {
// 	render () {
// 		// const {
// 		// 	data
// 		// } = this.props;
//
// 		return (
// 			<div>
// 				TESTEEEEEEEEEEEEe
// 			</div>
// 		);
// 	}
// }
//
// export default AppContainer


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import InputTextComponent from '../../components/input-text';
import ChartComponent from '../../components/chart';
import TableComponent from '../../components/table';
import ButtonComponent from '../../components/button';
//import style from './style.styl';

class AppContainer extends Component {

	render () {
		const style = {};
		// const {
		// 	data
		// } = this.props;

		return (
			<div>
				<Navbar>
					<InputTextComponent
						placeholder="First name"
						err
					/>
					<InputTextComponent
						placeholder="Last name"
					/>
					<InputTextComponent
						placeholder="Participation"
					/>
					<ButtonComponent
						text="Send"
					/>
				</Navbar>
				<Section>
					<div>
						<h1 className={`${style.title}`}> DATA </h1>
						<p className={`${style.desc}`}> Lorem ipsum dolor sit amet consectetur adipiscing elit </p>
					</div>
				</Section>
				<Section>
					<div
						className={`${style['section-content']}`}
					>
						<TableComponent />
					</div>
					<div
						className={`${style['section-content']} ${style['chart-container']}`}
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
		data: state.artists,
	};
};

export default connect(mapStateToProps)(AppContainer);
