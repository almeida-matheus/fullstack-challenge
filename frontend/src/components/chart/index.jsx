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
			labels
		} = this.props;

		const chartData = {
			datasets: [{
				data: data,
				backgroundColor: [
					'#faa577',
					'#f2c888',
					'#c4dda9',
					'#9bd2ad',
					'#5da78f',
				]
			}],
			labels: labels
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
						var amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						return amount + "%";
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
