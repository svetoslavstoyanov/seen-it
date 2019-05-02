import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

export default class RegisterForm extends Component {
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
		let username = this.state.username;
		let password = this.state.password;
		let data = { username, password };
		e.preventDefault();
		requester
			.post('user', '', 'basic', data)
			.then(res => {
				observer.trigger(observer.events.loginUser, res.username);
				sessionStorage.setItem('authToken', res._kmd.authtoken);
			})
			.catch(err => console.log(err));
	};
	render = () => {
		return (
			<form id='registerForm' onSubmit={this.handleSubmit}>
				<h2>Register</h2>
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
				<label>Repeat Password:</label>
				<input
					name='repeatPass'
					type='password'
					onChange={this.handleChange}
				/>
				<input id='btnRegister' value='Sign Up' type='submit' />
			</form>
		);
	};
}
