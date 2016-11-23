import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default function Input(props) {
  return(
        <input type="textarea" className="kana-textarea"></input>
  )
}
