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

	handlePageClick = (data) => {
		this.setState({
			currentPage: data.selected
		});
	}

	getDataByCurrentPage = () => {
		const {
			data,
			itemsByPage
		} = this.props;

		const {
			currentPage
		} = this.state;

		const maxRange = (currentPage + 1) * itemsByPage;
		const minRange = maxRange - itemsByPage;

		const dataSliced = data.slice(minRange, maxRange);

		return dataSliced;
	}

	handleDeleteCallBack = () => {
		const {
			data,
			itemsByPage
		} = this.props;

		const {
			currentPage
		} = this.state;

		const maxRange = (currentPage + 1) * itemsByPage;
		const minRange = maxRange - itemsByPage;

		const dataSliced = data.slice(minRange, maxRange);

		if (dataSliced.length <= 0 && currentPage !== 0) {
			this.setState({
				currentPage: currentPage - 1
			});
		}
	}

	render () {
		// console.log("render");
		const {
			columns,
			handleDelete,
			data,
			itemsByPage
		} = this.props;

		const {
			currentPage
		} = this.state;

		const pageCount = data.length / itemsByPage;

		if (data.length > 0) {
			return (
				<div>
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
								this.getDataByCurrentPage().map((model, i) => {
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
													isFetching={false}
													disabled={false}
													onClick={() => {
														handleDelete(model, this.handleDeleteCallBack);
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
