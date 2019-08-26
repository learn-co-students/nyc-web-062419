import React from 'react';
import './App.css';
import Header from './Header';
import IndexContainer from './IndexContainer';
import RolesContainer from './RolesContainer';

function App(props) {
 console.log('App Props', props);
 let membersArray = [
  { name: 'Colin', role: 'Xylophonist' },
  { name: 'Yana', role: 'Guitarist' },
  { name: 'Yosef', role: 'Lead Singer' },
  { name: 'Brianna', role: 'Bassist' },
  { name: 'Ben', role: 'Xylophonist' },
  { name: 'Anderson', role: 'Guitarist' },
  { name: 'Connecticut Philip', role: 'Xylophonist' }
 ];
 return (
  <div>
   <Header header={props.header} />
   <IndexContainer members={membersArray} />
   <RolesContainer />
  </div>
 );
}

export default App;
