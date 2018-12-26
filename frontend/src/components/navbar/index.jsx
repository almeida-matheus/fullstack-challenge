import React, { Component } from 'react';
import style from './style.styl';

class NavbarComponent extends Component {
	render () {
		return (
			<nav className={`${style.navbar}`}>
				{
					this.props.children
				}
			</nav>
		);
	}
}

export default NavbarComponent;
