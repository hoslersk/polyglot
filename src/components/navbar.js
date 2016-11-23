import React from 'react';
// import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return(
      <nav>
       <h2>Welcome to Polyglot | Sign In | Sign Up</h2> 
      </nav>
    )
  }
}
