import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Lessons extends Component {
	render() {
		return (
			<div>
				Lessons:
				<li><Link to="/japanese">Japanese</Link></li>
				<li><Link to="/spanish">Spanish</Link></li>
				<li><Link to="/german">German</Link></li>
				<li><Link to="/russian">Russian</Link></li>
			</div>
		)
	}
}
