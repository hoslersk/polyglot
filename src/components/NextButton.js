import React, { Component, PropTypes } from 'react'

class NextButton extends Component {
	render() {
		return(
			<div className="center-btn">
				<button type="submit" className="next-lesson-btn"><span>{this.props.text}</span></button>
			</div>
		)
	}
}

NextButton.Proptypes = {
	text: PropTypes.string,
}

export default NextButton
