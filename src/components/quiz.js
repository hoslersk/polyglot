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
        <form>
          <tr>
            <td>「あ」</td>
            <td>「い」</td>
            <td>「う」</td>
            <td>「え」</td>
            <td>「お」</td>
          </tr>
          <tr>
            <td><Input /></td>
            <td><Input /></td>
            <td><Input /></td>
            <td><Input /></td>
            <td><Input /></td>
          </tr>
          <button type="submit" className="next-lesson-btn"><span>Next Lesson</span></button>
        </form>
      </table>
    </div>
  )
}
