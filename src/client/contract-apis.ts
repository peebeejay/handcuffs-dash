import { Networks, getAddressList } from './addresses';
import { Provider } from '@ethersproject/providers';

// Container class used to instantiate most GEB contracts
// prettier-ignore
export class ContractApis {
  public safeEngine: SafeEngine

  constructor(
      network: Networks,
      public chainProvider: Provider
  )
  {
      // Set the contract address list
      let addressList = getAddressList(network)

      this.safeEngine = new SafeEngine(addressList.GEB_SAFE_ENGINE, this.chainProvider)
  }
}
