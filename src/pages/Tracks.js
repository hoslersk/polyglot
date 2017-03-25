import React, { Component } from 'react'
import { Link } from 'react-router'

import TRACKS from '../constants/tracks.js'

import Track from '../components/Track'
import Lesson from '../components/lesson'

export default class Tracks extends Component {

	get availableTracks() {
		return TRACKS.map((track, i) => {
			return (
				<Track key={i} name={track.name} link={track.link} lessons={track.lessons}>
					<Lesson />
				</Track>
			)
		})
	}

	render() {
		return (
			<div>
				{this.availableTracks}
			</div>
		)
	}
}
