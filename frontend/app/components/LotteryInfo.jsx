'use client'

import React, {useState, useEffect} from 'react'
import { getContract, defineChain, prepareContractCall, sendTransaction, readContract } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { client } from '../client';

const lotteryContract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0xa6207895057A787a8FaCdfD46BAdcC77125A543b"
});

const uZARContract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0xA39395D7D392dE775B276592BFda396CDF003006"
});

const LotteryInfo = () => {

  const account = useActiveAccount();
  const [userBalance, setUserBalance] = useState('');

  const GetUserBalance = async () => {
    const data = await readContract({
      contract: uZARContract,
      method:
        "function balanceOf(address account) view returns (uint256)",
      params: [account],
    });
    console.log(Number(data));

    setUserBalance(data)
  }

  useEffect(() => {
    GetUserBalance()
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6 text-black">
      <h2 className="text-lg font-bold mb-4">Lottery Information</h2>
      <p><strong>Connected Address:</strong> 0x1234...abcd</p>
      <p><strong>User Balance:</strong> {userBalance}</p>
      <p><strong>Pot:</strong> 5 ETH</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Enter Lottery
      </button>
    </div>
  )
}

export default LotteryInfo