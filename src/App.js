import React, { Component } from 'react';
import Navbar from './components/navbar';

import './index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Navbar />
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;
