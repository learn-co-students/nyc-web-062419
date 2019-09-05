import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
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
        <Header header={this.props.header} />
        <IndexContainer
          members={this.state.membersArray}
          clickHandler={this.clickHandler}
        />
        <MVP members={this.state.mvpArray} clickHandler={this.removeClickHandler} />
      </div>
    );
  }
}

export default App;
