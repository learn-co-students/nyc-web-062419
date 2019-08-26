import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let headerString = 'Sweet & Sour Singers';

ReactDOM.render(<App header={headerString} />, document.getElementById('root'));
