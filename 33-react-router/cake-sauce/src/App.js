import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import FoOhFo from './Components/FoOhFo';
import IndexContainer from './Containers/IndexContainer';
import MVP from './Containers/MVP';

class App extends Component {
  state = { mvpArray: [] };

  clickHandler = memberObj => {
    let newArray = [memberObj, ...this.state.mvpArray];
    this.setState({ mvpArray: newArray });
  };

  removeClickHandler = memberObj => {
    let newArray = this.state.mvpArray.filter(member => member != memberObj);
    this.setState({ mvpArray: newArray });
  };

  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/members" render={() => {
            return (
              <div>
                <IndexContainer
                  members={this.state.membersArray}
                  clickHandler={this.clickHandler}
                />
              </div>
            )
          }} />
          <Route path="/mvp" render={() => <MVP members={this.state.mvpArray} clickHandler={this.removeClickHandler} />} />
          <Route path="/home" component={Header} />
          <Route component={FoOhFo} />
        </Switch>

      </div>
    );
  }
}

export default App;
