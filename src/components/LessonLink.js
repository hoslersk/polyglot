import React from 'react';
import {Link} from 'react-router';

import Lessons from './Lessons'

export default class LessonLink extends React.Component {

	render() {
		return(
			<Link className="track-link" to="/tracks/japanese/lesson-1">Lesson 1</Link>
		)
	}
}
