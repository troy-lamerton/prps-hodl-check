import React from 'react';
import { getContractInstance } from '../../utils/index';

// dubi contract https://cdn.rawgit.com/nionis/purpose/master/build/contracts/DUBI.json

export default class HodlDisplay extends React.Component {
  // private contract;

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // get the DUBI contract interface
    getContractInstance(
      'https://cdn.rawgit.com/nionis/purpose/master/build/contracts/Hodler.json',
    ).then(contract => {
      let holdItems = new Array(200).fill(true);
      holdItems = holdItems.map((_, index) => {
        return contract.methods
          .getItem(window.coinbase, index)
          .call()
          .then(result => {
            if (result[2]) {
              const holdedValue = window.w3.utils.toBN(result[2]).toString();
              this.setState({
                balance: window.w3.utils.fromWei(holdedValue, 'ether'),
              });
            }
          })
          .then(() => {
            if (index % 10 === 0) console.log(index);
          });
      });
      return Promise.all(holdItems);
    });
  }

  render() {
    return (
      <div>
        <h2>Hodl Display</h2>
        <p className="value">{JSON.stringify(this.state, null, 2)}</p>
      </div>
    );
  }
}
