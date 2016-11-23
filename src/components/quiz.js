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
        <h3>Quiz Time!</h3>
        Please write the romanized equivalent of the following <em>hiragana</em> characters (peeking is okay, but try to say them out loud!):
      </div>
      <table className="kana-quiz-text">
        <tr>
          <td>「あ」</td>
          <td><Input /></td>
        </tr>
        <tr>
          <td>「い」</td>
          <td><Input /></td>
        </tr>
        <tr>
          <td>「う」</td>
          <td><Input /></td>
        </tr>
        <tr>
          <td>「え」</td>
          <td><Input /></td>
        </tr>
        <tr>
          <td>「お」</td>
          <td><Input /></td>
        </tr>
      </table>
    </div>
  )
}
