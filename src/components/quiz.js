import React from 'react';
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
        <div className="center-align">
        <table className="kana-quiz-table">
          <tr>
            <td className="kana-quiz-text">「あ」</td>
            <td><Input /></td>
            {/* <td className="kana-quiz-text">Correct!</td> */}
          </tr>
          <tr>
            <td className="kana-quiz-text">「い」</td>
            <td><Input /></td>
          </tr>
          <tr>
            <td className="kana-quiz-text">「う」</td>
            <td><Input /></td>
          </tr>
          <tr>
            <td className="kana-quiz-text">「え」</td>
            <td><Input /></td>
          </tr>
          <tr>
            <td className="kana-quiz-text">「お」</td>
            <td><Input /></td>
          </tr>
          {/* <div className="kana-quiz-text">
            「あ」
          </div>
          <div className="kana-quiz-input">
            <Input />
          </div>
          <div className="kana-quiz-text">
            「い」
          </div>
          <div className="kana-quiz-input">
            <Input />
          </div>
          <div className="kana-quiz-text">
            「う」
          </div>
          <div className="kana-quiz-input">
            <Input />
          </div>
          <div className="kana-quiz-text">
            「え」
          </div>
          <div className="kana-quiz-input">
            <Input />
          </div>
          <div className="kana-quiz-text">
            「お」
          </div>
          <div className="kana-quiz-input">
            <Input />
          </div> */}
        </table>
        </div>
        <div className="center-btn">
          <button type="submit" className="next-lesson-btn"><span>Next Lesson</span></button>
        </div>
      </form>
    </div>
  )
}
