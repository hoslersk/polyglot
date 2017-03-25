import React, { Component } from 'react';
import Navbar from './components/navbar';

import './index.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentTab: '',
		}

		this.updateTab = this.updateTab.bind(this)
	}

	updateTab(event) {
		this.setState({ currentTab: event.target.name })
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Navbar tab={this.state.currentTab} updateTab={this.updateTab} />
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;
