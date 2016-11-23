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
        <div className="inline-block">
          <div className="kana-quiz-text">
            <div>
            「あ」
            </div>
              <Input />
          </div>
          <div className="kana-quiz-text">
            <div>
            「い」
            </div>
            <Input />
          </div>
        </div>

        {/* <div className="kana-quiz-text inline-block">
          <div className="block">
          「う」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text inline-block">
          <div className="block">
          「え」
          </div>
          <Input />
        </div>
        <div className="kana-quiz-text inline-block">
          <div className="block">
          「お」
          </div>
          <Input />
        </div> */}
        <button type="submit" className="next-lesson-btn center-align"><span>Next Lesson</span></button>
      </form>
    </div>
  )
}
