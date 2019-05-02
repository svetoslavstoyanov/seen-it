import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from '../../infrastructure/requester';
class Logout extends Component {
	logout = () => {
		requester.post('user', '_logout', 'kinvey').then(res => {
			sessionStorage.removeItem('authToken');
		});
	};

	render() {
		return <Redirect to='/' />;
	}
}

export default Logout;
