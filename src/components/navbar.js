import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import NavItem from './navitem'

class Navbar extends Component {
	render() {
		return(
			<ul className="navbar">
				<li className="navtitle">Welcome to Polyglot</li>
				<NavItem tab={this.props.tab} link="/" name="home" text="Home" updateTab={this.props.updateTab} />
				<NavItem tab={this.props.tab} link="/tracks" name="tracks" text="Tracks" updateTab={this.props.updateTab} />
				<NavItem tab={this.props.tab} right link="/signup" name="signup" text="Sign Up" updateTab={this.props.updateTab} />
				<NavItem tab={this.props.tab} right link="/login" name="login" text="Log In" updateTab={this.props.updateTab} />
			</ul>
		)
	}
}

Navbar.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
}

export default Navbar
