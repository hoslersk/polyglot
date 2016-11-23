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
      <form className="kana-quiz-form">
        <div className="kana-quiz-text">
          <div className="center-align">
          「あ」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text">
          <div className="center-align">
          「い」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text">
          <div className="center-align">
          「い」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text">
          <div className="center-align">
          「え」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text">
          <div className="center-align">
          「お」
          </div>
          <Input />
        </div>
        <div className="center-btn">
          <button type="submit" className="next-lesson-btn"><span>Next Lesson</span></button>
        </div>
      </form>
    </div>
  )
}
