import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getAddress().then(this.getBalance);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">hodler thing</h1>
        </header>
        <p className="App-intro">your address: {this.state.address}</p>
        <p className="App-intro">ETH balance: {this.state.balance}</p>
      </div>
    );
  }

  getAddress = () => {
    return window.myweb3.eth.getCoinbase().then(address => {
      this.setState({ address });
    });
  };

  getBalance = () => {
    return window.myweb3.eth.getBalance(this.state.address).then(balance => {
      this.setState({ balance: window.w3.utils.fromWei(balance, 'ether') });
    });
  };
}

export default App;
