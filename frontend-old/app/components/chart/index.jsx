import React, {
	Component
} from 'react';

import {
	Doughnut
} from 'react-chartjs-2';

//
// import {
// 	Doughnut
// } from 'react-chartjs';

export default class ChartComponent extends Component {
	render () {
		const {
			width,
			height
		} = this.props;

		const data = {
			datasets: [{
				data: [
					10,
					11,
					15,
					20,
					10,
				],
				backgroundColor: [
					'red',
					'yellow',
					'green',
					'blue',
					'blue',
				]
			}],
			labels: [
				'Hiago Silva',
				'Carlos Moura',
				'Eliza Souza',
				'Fernando Oliveira',
				'Anderson Santos'
			]
		};

		const options = {
			responsive: false,
			legend: {
				position: 'bottom',
				labels: {
					fontColor: '#737980',
					boxWidth: 20,
					padding: 20
				}
			}
		};

		return (
			<Doughnut
				data={data}
				options={options}
				width={width}
				height={height}
			/>
		);
	}
}
