import React, { Component } from 'react';
import LoginForm from '../user/loginForm';
import RegisterForm from '../user/registerForm';
import About from './about';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section id='viewWelcome'>
				<div className='welcome'>
					<div className='signup'>
						<LoginForm />
						<RegisterForm />
					</div>
					<About />
				</div>
			</section>
		);
	}
}

export default Home;
