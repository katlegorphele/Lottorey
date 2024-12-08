import { list } from 'postcss';
import React from 'react'
import { createThirdwebClient, defineChain } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { client } from '../client';

const ConnectWallet = () => {

  const lisk_testnet_chain = defineChain(4202);

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