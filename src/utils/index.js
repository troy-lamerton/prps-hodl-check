export const functionNameToHex = functionName => {
  switch (functionName) {
    case 'balanceOf()':
      return '0x70a08231000000000000000000000000';
    default:
      throw new Error(
        `the functionNameToHex ${
          functionName
        } does not have an associated hex value. Please define it in the utils file.`,
      );
  }
};
