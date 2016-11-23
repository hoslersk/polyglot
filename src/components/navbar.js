import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Track from './track';

export default class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return(
      <div>
        <nav>
          <ul>
            <li><span>Welcome to Polyglot</span></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="float-right"><a href="#signin">Sign In</a></li>
            <li className="float-right"><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
        <Track />
      </div>
    )
  }
}
