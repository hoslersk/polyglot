import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavItem extends Component {
	render() {
		return(
			<li className={`navitem${this.props.right ? 'Right' : ''}${this.props.tab === this.props.name ? 'Active' : ''}`}>
				<Link to={this.props.link} name={this.props.name} onClick={this.props.updateTab}>{this.props.text}</Link>
			</li>
		)
	}
}

NavItem.Proptypes = {
	updateTab: PropTypes.func,
	tab: PropTypes.string,
	right: PropTypes.bool,
}

export default NavItem
