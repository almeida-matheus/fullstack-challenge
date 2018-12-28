import React, {
	Component
} from 'react';

import {
	Doughnut
} from 'react-chartjs-2';
import constants from '../../constants';

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
				display: false
			},
			tooltips: {
				callbacks: {
					label: (tooltipItem, data) => {
						const tooltipData = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						const tooltipLabel = data.labels[tooltipItem.datasetIndex];
						return `${tooltipLabel} - ${tooltipData}%`;
					}
				}
			}
		};
		if (data.length > 0) {
			return (
				<div className='chart-container-r'>
					<Doughnut
						data={chartData}
						options={options}
						width={width}
						height={height}
					/>
					<div
						className='legend-container'
					>
						{
							labels.map((item, i) => {
								return (
									<div
										className='legend'
										key={i}
									>
										<span
											className='tag'
											style={{
												backgroundColor: colors[i]
											}}
										/>
										<span
											className='desc'
										>
											{
												item
											}
										</span>
									</div>
								);
							})
						}
					</div>
				</div>
			);
		}

		return (
			<div className="label error">
				{
					constants.MESSAGES.IS_EMPTY
				}
			</div>
		);
	}
}
