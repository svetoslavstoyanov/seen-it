import React, { Component } from 'react';
import observer from '../../infrastructure/observer';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { username: null };
		observer.subscribe(observer.events.loginUser, this.userLoggedIn);
	}

	userLoggedIn = username => {
		this.setState({ username });
	};

	render() {
		let loggedInSection = (
			<div id='profile'>
				<span id='username'>Hello, {this.state.username}!</span>|
				<a href='#/logout'>logout</a>
			</div>
		);

		return (
			<header>
				<span className='logo'>☃</span>
				<span className='header'>SeenIt</span>
				{this.state.username ? loggedInSection : null}
			</header>
		);
	}
}

export default Header;
