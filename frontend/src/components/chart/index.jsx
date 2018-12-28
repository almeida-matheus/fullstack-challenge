import React, {
	Component
} from 'react';

import {
	Doughnut
} from 'react-chartjs-2';

export default class ChartComponent extends Component {
	render () {
		const {
			width,
			height,
			data,
			labels,
			colors
		} = this.props;

		const chartData = {
			datasets: [{
				data,
				backgroundColor: colors
			}],
			labels
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
			},
			tooltips: {
				callbacks: {
					label: (tooltipItem, data) => {
						const amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return `${amount}%`;
					}
				}
			}
		};

		return (
			<Doughnut
				data={chartData}
				options={options}
				width={width}
				height={height}
			/>
		);
	}
}
