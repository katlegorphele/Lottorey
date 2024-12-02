'use client'

import React, { useState, useEffect } from 'react'
import { getContract, defineChain, prepareContractCall, sendTransaction, readContract } from "thirdweb";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { inAppWallet } from '@thirdweb-dev/react';
import { client } from '@/app/client';
import { toWei } from 'thirdweb';


const celo_chain = defineChain(44787);
const base_sepolia = defineChain(84532);

const contract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0x4C48F3DDe928826c235bd6f125dad9D6B76A38ca"
});


const ActionButtons = () => {
  const account = useActiveAccount();


  const enterLottery = async () => {
    try {
      const transaction = await prepareContractCall({
        contract,
        method: "function enterLottery()",
        value: toWei("0.001"),
      });
      const { transactionHash } = await sendTransaction({
        transaction,
        account,
      });
    } catch (error) {
      console.error(`Error Occured: ${error}`);
    }
  }

  const pickWinner = async () => {
    try {
      const transaction = await prepareContractCall({
        contract,
        method: "function pickWinner()",
      });
      const { transactionHash } = await sendTransaction({
        transaction,
        account,
      });
      console.log(transactionHash);
    } catch (error) {
      console.error(`Error Occured: ${error}`);
    }
  }

  return (
    <div>
      <button
        onClick={enterLottery}
        className='w-full bg-green-600 text-white py-2 px-4 rounded mb-4'>
        Enter Lottery
      </button>

      <button
        onClick={pickWinner}
        className="w-full bg-green-600 text-white py-2 px-4 rounded mb-4">
        Pick Winner
      </button>
      <button className="w-full bg-red-600 text-white py-2 px-4 rounded">
        Pay Winner
      </button>
    </div>
  );
};

export default ActionButtons;
