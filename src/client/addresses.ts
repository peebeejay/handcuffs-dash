type ContractNames = 'HANDCUFFS';

export type ContractList = Record<ContractNames, string>;

export enum Networks {
  Mainnet,
  Ropsten,
  Local,
}

export const MAINNET_ADDRESSES: ContractList = {
  HANDCUFFS: '<placeholder>',
};

export const ROPSTEN_ADDRESSES: ContractList = {
  HANDCUFFS: '0xd4484ec552e478D5967E183cC93fB7Af37CF68D1',
};

export const LOCAL_ADDRESSES: ContractList = {
  HANDCUFFS: '<placeholder>',
};

export const getAddressList = (networkName: Networks) => {
  if (networkName === Networks.Mainnet) {
    return MAINNET_ADDRESSES;
  } else if (networkName === Networks.Ropsten) {
    return ROPSTEN_ADDRESSES;
  } else if (networkName === Networks.Local) {
    return LOCAL_ADDRESSES;
  } else return LOCAL_ADDRESSES;
};
