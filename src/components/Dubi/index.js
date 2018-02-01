import React from 'react';
import { getContractInstance } from '../../utils/index';

import './index.css';

// dubi contract https://cdn.rawgit.com/nionis/purpose/master/build/contracts/DUBI.json

export default class DubiDisplay extends React.Component {
  // private contract;

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // get the DUBI contract interface
    getContractInstance(
      'https://cdn.rawgit.com/nionis/purpose/master/build/contracts/DUBI.json',
    ).then(contract => {
      return contract.methods
        .balanceOf(window.coinbase)
        .call()
        .then(result => {
          const tokenBalance = window.w3.utils.toBN(result).toString();
          this.setState({
            balance: window.w3.utils.fromWei(tokenBalance, 'ether'),
          });
        });
    });
  }

  render() {
    return (
      <div>
        <h2>DUBI Display</h2>
        <p className="value">{JSON.stringify(this.state, null, 2)}</p>
      </div>
    );
  }
}
