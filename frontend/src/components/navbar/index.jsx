import React, { Component } from 'react';

class NavbarComponent extends Component {
	render () {
		const {
			children
		} = this.props;

		return (
			<nav className='navbar'>
				{
					children
				}
			</nav>
		);
	}
}

export default NavbarComponent;
