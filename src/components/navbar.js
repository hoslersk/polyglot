import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navtitle">Welcome to Polyglot</li>
				<li className={`navitem${this.props.tab === 'home' ? 'Active' : ''}`}>
					<Link to="/" name="home" onClick={this.props.updateTab}>Home</Link>
				</li>
				<li className={`navitem${this.props.tab === 'lessons' ? 'Active' : ''}`}>
					<Link to="/tracks" name="tracks" onClick={this.props.updateTab}>Tracks</Link>
				</li>
				<li className={`navitemRight${this.props.tab === 'signup' ? 'Active' : ''}`}>
					<Link to="/signup" name="signup" onClick={this.props.updateTab}>Sign Up</Link>
				</li>
				<li className={`navitemRight${this.props.tab === 'login' ? 'Active' : ''}`}>
					<Link to="/login" name="login" onClick={this.props.updateTab}>Log In</Link>
				</li>
			</ul>
		)
	}
}

Navbar.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
}

export default Navbar
