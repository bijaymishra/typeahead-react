import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AsyncExample from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<MyApp />, document.getElementById('root'));
ReactDOM.render(<AsyncExample />, document.getElementById('root'));
registerServiceWorker();
