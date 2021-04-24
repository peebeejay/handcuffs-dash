import { Provider } from '@ethersproject/providers';
import { ContractList, getAddressList, Networks } from './addresses';
import { Handcuffs as TCHandscuffs, Handcuffs__factory } from './contracts';

/**
 * This is the primary class with which to interact with the Handcuffs
 * contract.
 */
export class Handcuffs {
  public contract: TCHandscuffs;
  /* The provider is exclusively an ethers.provider.Provider */
  protected provider: Provider;
  protected addresses?: ContractList;

  constructor(network: Networks, provider: Provider) {
    this.provider = provider;
    this.addresses = getAddressList(network);
    /**
     * This contract type wrapper is generated by typechain. Since this project only involves a single contract,
     * there isn't a need to store contract interfaces in a separate class.
     */
    this.contract = Handcuffs__factory.connect(this.addresses.HANDCUFFS, this.provider);
  }
}