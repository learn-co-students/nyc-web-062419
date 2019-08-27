import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import IndexContainer from './IndexContainer';
import MVP from './MVP';

class App extends Component {
 state = { membersArray: [], mvpArray: [] };

 // constructor(props){
 //     super(props)
 //     this.state = {}
 // }

 componentDidMount() {
  console.log('App Did Mount');
  fetch('http://localhost:3000/band')
   .then(resp => resp.json())
   .then(data => this.setState({ membersArray: data }));
 }

 clickHandler = memberObj => {
  console.log('App handler', memberObj);
  let newArray = [memberObj, ...this.state.mvpArray];
  this.setState({ mvpArray: newArray });
 };

 render() {
  console.log('App state', this.state);

  return (
   <div>
    <Header header={this.props.header} />
    <IndexContainer
     members={this.state.membersArray}
     clickHandler={this.clickHandler}
    />
    <MVP members={this.state.mvpArray} />
   </div>
  );
 }
}

export default App;
