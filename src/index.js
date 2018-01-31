import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Web3 from 'web3';
window.onload = function() {
  if (typeof web3 !== 'undefined') {
    window.myweb3 = new Web3(window.web3.currentProvider);
    window.w3 = window.myweb3;
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  } else {
    alert('no web3, go get metamask extension');
  }
};
