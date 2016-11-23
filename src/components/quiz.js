import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Input from './input';

export default function Quiz(props) {
  return(
    <div className="quiz-div">
      <div>
        Please write the romanized equivalent of the following <em>hiragana</em> character: 「あ」
      </div>
      <Input />
    </div>
  )
}
