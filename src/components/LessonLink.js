import React from 'react';
import { Link } from 'react-router';

export default class LessonLink extends React.Component {

	render() {
		return (
			<Link className="lesson-link" onClick={this.props.toggleLesson} to={`${this.props.baseLink}${this.props.link}`}>{this.props.name}</Link>
		)
	}
}
