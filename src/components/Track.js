import React from 'react';
import { Link } from 'react-router';

import LessonLink from './LessonLink'
import Lesson from './lesson'

export default class JapaneseTrack extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			showLinks: false,
			showLesson: false,
		}

		this.toggleLinks = this.toggleLinks.bind(this)
		this.toggleLesson = this.toggleLesson.bind(this)
	}

	toggleLinks() {
		this.setState({ showLinks: !this.state.showLinks })
	}

	get lessonLinks() {
		if (this.props.lessons && this.state.showLinks) {
			return this.props.lessons.map((lesson, i) => {

				return (
					<LessonLink key={i} toggleLesson={this.toggleLesson} baseLink={this.props.link} link={lesson.link} name={lesson.name} />
				)
			})
		}

		return null
	}

	toggleLesson() {
		this.setState({ showLesson: !this.state.showLesson })
	}

	get lesson() {
		if (this.state.showLesson) {

			return <Lesson />
		}

		return null
	}

	render() {
		return(
			<div className="track-div">
				<h2>
					<Link className="track-link" to={this.props.link} onClick={this.toggleLinks}>{`Language Track: ${this.props.name}`}</Link>
				</h2>
				{this.lessonLinks}
				{this.lesson}
			</div>
		)
	}
}
