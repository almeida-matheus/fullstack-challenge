import React, {
	Component
} from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td
} from 'react-super-responsive-table';
import ReactPaginate from 'react-paginate';
import ButtonComponent from '../button';
import constants from '../../constants';

export default class TableComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			currentPage: 0
		};
	}

	componentWillReceiveProps () {
		this.updateCurrentPage();
	}

	handlePageClick = (data) => {
		this.setState({
			currentPage: data.selected
		});
	}

	getTablePageData = (currentPage) => {
		const {
			data,
			itemsByPage
		} = this.props;

		const maxRange = (currentPage + 1) * itemsByPage;
		const minRange = maxRange - itemsByPage;

		const dataSliced = data.slice(minRange, maxRange);

		return dataSliced;
	}

	updateCurrentPage = () => {
		const {
			currentPage
		} = this.state;

		const data = this.getTablePageData(currentPage);

		if (data.length <= 1 && currentPage !== 0) {
			this.setState({
				currentPage: currentPage - 1
			});
		}
	}

	render () {
		const {
			currentPage
		} = this.state;

		const {
			columns,
			handleDelete,
			data,
			itemsByPage,
			maxParticipation
		} = this.props;

		const pageCount = Math.ceil(data.length / itemsByPage);

		const totalParticipation = data.reduce(
			(a, b) => parseInt(a, 0) + parseInt(b.participation, 0), 0
		);

		if (data.length > 0) {
			return (
				<div>
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
					<Table
						cellSpacing="0"
					>
						<Thead>
							<Tr>
								{
									columns.map((item, i) => {
										return (
											<Th key={i}>
												{
													item
												}
											</Th>
										);
									})
								}
							</Tr>
						</Thead>
						<Tbody>
							{
								this.getTablePageData(currentPage)
									.map((model, i) => {
										return (
											<Tr key={i}>
												<Td>
													{
														model.firstName
													}
												</Td>
												<Td>
													{
														model.lastName
													}
												</Td>
												<Td>
													{
														model.participation
													}
												</Td>
												<Td className="action">
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
												</Td>
											</Tr>
										);
									})
							}
						</Tbody>
					</Table>
					<ReactPaginate
						containerClassName='paginator-container'
						pageClassName='paginator-page'
						previousLinkClassName='paginator-arrows'
						nextLinkClassName='paginator-arrows'
						activeClassName='paginator-active'
						breakClassName='paginator-break'
						previousLabel='Previous'
						nextLabel='Next'
						breakLabel='...'
						pageCount={pageCount}
						initialPage={currentPage}
						forcePage={currentPage}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.handlePageClick}
					/>
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
