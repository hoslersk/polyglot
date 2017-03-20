import React, { Component } from 'react';
import { Route } from 'react-router';

import App from './App';
import Tracks from './pages/Tracks'
import JapaneseTrack from './components/JapaneseTrack'
import LessonLink from './components/LessonLink'
import Lesson from './components/lesson'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

export default (
	<Route path="/" component={App}>
		<Route path="/tracks" component={Tracks}>
			<Route path="/tracks/japanese" component={LessonLink} />
			<Route path="/tracks/japanese/lesson-1" component={Lesson} />
		</Route>
		<Route path="/signup" component={SignUp} />
		<Route path="/login" component={LogIn} />
	</Route>
);
