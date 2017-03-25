import React from 'react';
import { Link } from 'react-router';
import Quiz from './quiz';
import Alphabet from './Alphabet'

export default function Lesson(props) {
  return(
    <div className="lesson-div">
			<h2>Lesson I</h2>
			<p>To start, we'll need to have an understanding of one of the Japanese language's basic writing systems. Your first introduction to this will be <em>hiragana</em>. While we will go over each one individually, the initial list of <em>hiragana</em> characters we will cover is as follows:</p>
			<Alphabet language="japanese" />
      <p>We'll begin with focusing on the the first 5 <em>hiragana</em> characters from the top right, moving down. (Please note that the use of "hook brackets" (「　」) around each character is the Japanese equivalent of quotation marks.):</p>
      <div className="center-align">
        <p>「あ」 is the vowel "a" (pronounced "AH").</p>
        <p>「い」 is the vowel "i" (pronounced "EE").</p>
        <p>「う」 is the vowel "u" (pronounced "OO").</p>
        <p>「え」 is the vowel "e" (pronounced "EH").</p>
        <p>「お」 is the vowel "o" (pronounced "OH").</p>
      </div>
      <Quiz />
    </div>
  )
}
