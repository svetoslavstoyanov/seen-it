import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null
		};
	}

	handleChange = e => {
		let [fieldName, fieldValue] = [e.target.name, e.target.value];
		this.setState({ [fieldName]: fieldValue });
	};
	handleSubmit = e => {
		e.preventDefault();
		requester
			.post('user', 'login', 'basic', this.state)
			.then(res => {
				sessionStorage.setItem('authToken', res._kmd.authtoken);
				observer.trigger(observer.events.loginUser, res.username);
			})
			.catch(err => console.log(err));
	};
	render = () => {
		return (
			<form id='loginForm' onSubmit={this.handleSubmit}>
				<h2>Sign In</h2>
				<label>Username:</label>
				<input
					name='username'
					type='text'
					onChange={this.handleChange}
				/>
				<label>Password:</label>
				<input
					name='password'
					type='password'
					onChange={this.handleChange}
				/>
				<input id='btnLogin' value='Sign In' type='submit' />
			</form>
		);
	};
}
