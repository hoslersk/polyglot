import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Lesson from './lesson';

export default function Track(props) {
  return(
    <div className="track-div">
      <h2>
        <a className="track-link" href="#japanese">Language Track: 日本語</a>
      </h2>
      <Lesson />
      {/* {this.props.children} */}
    </div>
  )
}
