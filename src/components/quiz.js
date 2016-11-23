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
      <form>
        <div className="kana-quiz-text">
          「あ」
          <Input />
        </div>
        <div className="kana-quiz-text">
          「い」
          <Input />
        </div>
        <div className="kana-quiz-text">
          「う」
          <Input />
        </div>
        <div className="kana-quiz-text">
          「え」
          <Input />
        </div>
        <div className="kana-quiz-text">
          「お」
          <Input />
        </div>
        <div className="center-align">
          <button type="submit" className="next-lesson-btn"><span>Next Lesson</span></button>
        </div>
      </form>
    </div>
  )
}
