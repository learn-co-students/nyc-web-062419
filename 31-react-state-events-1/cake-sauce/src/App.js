import React from 'react';
import './App.css';
import Header from './Header';
import IndexContainer from './IndexContainer';
import RolesContainer from './RolesContainer';

function App(props) {
 console.log('App Props', props);
 return (
  <div>
   <Header header={props.header} />
   <IndexContainer members={membersArray} />
   <RolesContainer members={membersArray} />
  </div>
 );
}

export default App;
