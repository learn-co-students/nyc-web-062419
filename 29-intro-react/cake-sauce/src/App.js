import React from 'react';
import './App.css';
import Header from './Header';

function App(props) {
 console.log('App Props', props);
 return <Header header={props.header} />;
}

export default App;
