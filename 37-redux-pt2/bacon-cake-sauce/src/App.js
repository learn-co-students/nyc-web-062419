import React from 'react';
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Bacon from './Bacon'
import CakeSauce from './CakeSauce'
import { fetchBaconImages } from "./actions"

class App extends React.Component {

  componentDidMount() {
    // fire off dispatch to send my fetch request 
    this.props.fetchImages()
  }

  render() {
    console.log("app props:", this.props)
    return (
      <Switch>
        <Route path="/bacon" component={Bacon} />
        <Route path="/cakesauce" component={CakeSauce} />
        <Route path="/" component={Welcome} />
      </Switch>
    );
  }
}

function mdp(dispatch) {
  return { fetchImages: dispatch(fetchBaconImages) }
}

export default connect(null, mdp)(App);
