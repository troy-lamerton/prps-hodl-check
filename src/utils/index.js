export function getContractInstance(contractJsonURL) {
  return fetch(contractJsonURL)
    .then(raw => raw.json())
    .then(data => {
      const abi = data.abi;
      const address = data.networks[1].address // contract address on mainnet

      return new window.w3.eth.Contract(abi, address, {
        from: window.coinbase,
      });
    });
}
