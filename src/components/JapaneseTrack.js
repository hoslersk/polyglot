import React from 'react';
import {Link} from 'react-router';

import Lessons from './Lessons'

export default class JapaneseTrack extends React.Component {

	render() {
		return(
			<div className="track-div">
				<h2>
					<Link className="track-link" to="/tracks/japanese">Language Track: 日本語 (Japanese)</Link>
				</h2>
				{this.props.children}
			</div>
		)
	}
}
