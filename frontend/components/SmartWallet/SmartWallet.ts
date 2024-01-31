import { ethers } from "ethers";
import { SmartWallet } from "@thirdweb-dev/wallets";
import {
  TWApiKey,
  factoryAddress,
  activeChain,
  nftDropAddress,
  implementation,
} from "../../constants";
import { SmartContract, NFT } from "@thirdweb-dev/sdk";
import { WalletOptions } from "@thirdweb-dev/wallets";
import type { SmartWalletConfig } from "@thirdweb-dev/wallets";
import type { BaseContract } from "ethers";

export default function newSmartWallet(token: NFT) {
  //Smart Wallet config object
  const config: WalletOptions<SmartWalletConfig> = {
    chain: activeChain, // the chain where your smart wallet will be or is deployed
    factoryAddress: factoryAddress, // your own deployed account factory address
    gasless: false, // enable or disable gasless transactions
    //@ts-ignore
    factoryInfo: {
      getAccountAddress: async (
        factory: SmartContract<BaseContract>,
        owner: string
      ) => {
        return factory.call("account", [
          implementation,
          activeChain.chainId,
          nftDropAddress,
          token.metadata.id,
          0
        ]);
      }, // the factory method to call to get the account address
    },
  };
  return new SmartWallet(config);
}
