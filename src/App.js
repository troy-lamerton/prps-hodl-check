import React, { Component } from 'react';
import Dubi from './components/Dubi';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getBalance();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">hodler thing</h1>
        </header>
        <p className="App-intro">your address: {window.coinbase}</p>
        <p className="App-intro">ETH balance: {this.state.balance}</p>

        <Dubi />
      </div>
    );
  }

  getBalance = () => {
    return window.myweb3.eth.getBalance(window.coinbase).then(balance => {
      this.setState({ balance: window.w3.utils.fromWei(balance, 'ether') });
    });
  };
}

export default App;
