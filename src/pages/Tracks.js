import React, { Component } from 'react';
import { Link } from 'react-router';

import JapaneseTrack from '../components/JapaneseTrack'
import Lesson from '../components/lesson'

export default class Tracks extends Component {
	render() {
		return (
			<div>
				<JapaneseTrack>
					{this.props.children}
				</JapaneseTrack>
			</div>
		)
	}
}
