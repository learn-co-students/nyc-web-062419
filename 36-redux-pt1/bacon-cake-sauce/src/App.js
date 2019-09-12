import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

const App = () => {
  return (
    <Welcome />
  );
}
function msp(state) {
  return { loggedIn: state.loggedIn }
}

export default connect(msp)(App);
