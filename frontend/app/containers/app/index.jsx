import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../../components/section';
import Navbar from '../../components/navbar';
import InputTextComponent from '../../components/input-text';
import ButtonComponent from '../../components/button';
import style from './style.styl';

class AppContainer extends Component {
	render () {
		// const {
		// 	data
		// } = this.props;

		return (
			<div>
				<Navbar>
					<InputTextComponent
						placeholder="First name"
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
					<div>
						table
					</div>
					<div>
						graph
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
