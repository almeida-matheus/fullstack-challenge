import React, {
	Component
} from 'react';
import ButtonComponent from '../button';
import constants from '../../constants';

export default class TableComponent extends Component {
	render () {
		const {
			columns,
			handleDelete,
			data,
			maxParticipation
		} = this.props;

		const totalParticipation = data.reduce(
			(a, b) => parseInt(a, 0) + parseInt(b.participation, 0), 0
		);

		if (data.length > 0) {
			return (
				<div className='table-content'>
					<div className='table-info'>
						<div>
							<span className='title'>
								{
									'Total:'
								}
							</span>
							<span className='desc'>
								{
									totalParticipation
								}
							</span>
						</div>
						<div>
							<span className='title'>
								{
									'Remaining:'
								}
							</span>
							<span className='desc'>
								{
									maxParticipation - totalParticipation
								}
							</span>
						</div>
					</div>
					<div className='responsible-table-container'>
						<div className='table'>
							<div className='flex-row'>
								{
									columns.map((model, key) => {
										return (
											<div
												className='column th'
												key={key}
											>
												{
													model
												}
											</div>
										);
									})
								}
							</div>
							<div className='tbody'>

								{
									data.map((model, key) => {
										return (
											<div
												className='flex-row'
												key={key}
											>
												<div className='column td'>
													{
														model.firstName
													}
												</div>
												<div className='column td'>
													{
														model.lastName
													}
												</div>
												<div className='column td'>
													{
														model.participation
													}
												</div>
												<div className='column td'>
													<ButtonComponent
														type="submit"
														cssType="clear"
														text=""
														disabled={false}
														onClick={() => {
															handleDelete(model);
														}}
													>
														<img
															alt="delete"
															width={20}
															height={20}
															src={`${process.env.PUBLIC_URL}/images/delete-button.svg`}
														/>
													</ButtonComponent>
												</div>
											</div>
										);
									})
								}
							</div>
						</div>
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
