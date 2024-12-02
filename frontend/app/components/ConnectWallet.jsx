import { list } from 'postcss';
import React from 'react'
import { createThirdwebClient, defineChain } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

export const client = createThirdwebClient({ clientId: '5aaa21e877f5f6045408ccd638dace6c' });

const ConnectWallet = () => {

  const lisk_testnet_chain = defineChain(4202);
  const celo_chain = defineChain(44787);
  return (
    <ConnectButton
        client={client}
        accountAbstraction={{
          chain: lisk_testnet_chain,
          sponsorGas: true,
        }}
      />
  )
}

export default ConnectWallet