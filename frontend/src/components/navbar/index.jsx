import React, { Component } from 'react';

class NavbarComponent extends Component {
	render () {
		return (
			<nav className={'navbar'}>
				{
					this.props.children
				}
			</nav>
		);
	}
}

export default NavbarComponent;
