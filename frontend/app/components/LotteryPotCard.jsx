'use client'

import React, {useState, useEffect} from 'react'
import { getContract, defineChain, prepareContractCall, sendTransaction, readContract } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { client } from '../client';

const uZARContract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0xA39395D7D392dE775B276592BFda396CDF003006"
});

const LotteryPotCard = () => {

  const [lotteryPot, setLotteryPot] = useState('');

  const GetLotteryPot = async () => {
    const data = await readContract({
      contract: uZARContract,
      method:
        "function balanceOf(address account) view returns (uint256)",
      params: ['0xa6207895057A787a8FaCdfD46BAdcC77125A543b'],
    });
    console.log(data);
    setLotteryPot(data);
    console.log(Number(data));

    setLotteryPot(Number(data)/ 1e18)
  }

  useEffect(() => {
    GetLotteryPot()
  }, []);





  return (
    <div className="bg-yellow-100 shadow rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold">Current Lottery Pot</h2>
      <p className="text-3xl font-bold text-yellow-600 mt-4">uZAR{lotteryPot}</p>
    </div>
  )
}

export default LotteryPotCard