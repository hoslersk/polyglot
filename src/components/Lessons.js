import React from 'react'
import { Link } from 'react-router'

import { TRACKS } from '../constants/tracks.js'

export default class Lessons extends React.Component {

	get availableTracks() {
		return TRACKS.map((track) => {
			debugger
			return (
				<div className="track-div">
					<h2>
						<Link className="track-link" to={track.link}>{`Language Track: ${track.name}`}</Link>
					</h2>
				</div>
			)
		})
	}

	render() {
		return(
			<div>
				{this.availableTracks}
			</div>
		)
	}
}
