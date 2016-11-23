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
         <h2>Welcome to Polyglot | Sign In | Sign Up</h2>
        </nav>
        <Track />
      </div>
    )
  }
}
