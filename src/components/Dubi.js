import React from 'react';
import { functionNameToHex } from '../utils/index';

import './index.css';

// dubi contract https://cdn.rawgit.com/nionis/purpose/master/build/contracts/DUBI.json

export default class DubiDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // get the DUBI contract interface
    fetch(
      'https://cdn.rawgit.com/nionis/purpose/master/build/contracts/DUBI.json',
    )
      .then(raw => raw.json())
      .then(data => {
        const abi = data.abi;
        const address = '0xd4cffeef10f60eca581b5e1146b5aca4194a4c3b'; // dubi contract
        const contractCallData =
          functionNameToHex('balanceOf()') + window.coinbase.slice(2);
        // const contract = new window.w3.eth.Contract(abi, address);
        // contract.methods.balanceOf(inst =>
        //   inst.call().then((a, b) => console.log(a, b)),
        // );
        window.w3.eth.call(
          {
            to: address,
            data: contractCallData,
          },
          (err, result) => {
            if (err) {
              console.error('w3 error', err);
              return;
            }
            const tokenBalance = window.w3.utils.toBN(result).toString();
            this.setState({
              balance: window.w3.utils.fromWei(tokenBalance, 'ether'),
            });
          },
        );
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

  fetchThings = () => {
    this.setState;
  };
}
