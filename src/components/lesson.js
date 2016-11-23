import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default function Lesson(props) {
  return(
    <div className="lesson-div">
      <h3>Lesson I</h3>
      <p>To start, we'll need to have an understanding of one of the Japanese language's basic written systems. Your first introduction to this will be <em>hiragana</em>.</p>
      <p>While we will go over each one individually, the initial list of <em>hiragana</em> characters we will cover is as follows:</p>
      <table>
        <tr>
          <td>　</td>
          <td>わ</td>
          <td>ら</td>
          <td>や</td>
          <td>ま</td>
          <td>は</td>
          <td>な</td>
          <td>た</td>
          <td>さ</td>
          <td>か</td>
          <td>あ</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>り</td>
          <td>　</td>
          <td>み</td>
          <td>ひ</td>
          <td>に</td>
          <td>ち</td>
          <td>し</td>
          <td>き</td>
          <td>い</td>
        </tr>
        <tr>
          <td>ん</td>
          <td>　</td>
          <td>る</td>
          <td>ゆ</td>
          <td>む</td>
          <td>ふ</td>
          <td>ぬ</td>
          <td>つ</td>
          <td>す</td>
          <td>く</td>
          <td>う</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>れ</td>
          <td>　</td>
          <td>め</td>
          <td>へ</td>
          <td>ね</td>
          <td>て</td>
          <td>せ</td>
          <td>け</td>
          <td>え</td>
        </tr>
        <tr>
          <td>　</td>
          <td>を</td>
          <td>ろ</td>
          <td>よ</td>
          <td>も</td>
          <td>ほ</td>
          <td>の</td>
          <td>と</td>
          <td>そ</td>
          <td>こ</td>
          <td>お</td>
        </tr>
      </table>
    </div>
  )
}
