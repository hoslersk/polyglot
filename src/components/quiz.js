import React from 'react'

import Input from './input'
import NextButton from './NextButton'

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
        </table>
        </div>
				<NextButton text="Next Lesson" />
      </form>
    </div>
  )
}
