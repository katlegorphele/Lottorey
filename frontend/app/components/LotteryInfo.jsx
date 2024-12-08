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

const LotteryInfo = () => {

  const account = useActiveAccount();
  const [userBalance, setUserBalance] = useState(0);
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    if (account) {
      setUserAddress(account.address)
    }
  }, [account])

  const GetUserBalance = async () => {
    const data = await readContract({
      contract: uZARContract,
      method:
        "function balanceOf(address account) view returns (uint256)",
      params: [userAddress],
    });
    console.log(data);
    // Convert the data to a number and set the state
    const balance = ;
    setUserBalance(data );
  }

  useEffect(() => {
    GetUserBalance()
  }, [userAddress]);



  return (
    <div className="bg-white shadow rounded-lg p-6 text-black">
      <h2 className="text-lg font-bold mb-4">Connected Address Info</h2>
      <p><strong>Connected Address:</strong> {userAddress}</p>
      <p><strong>User Balance:</strong> {userBalance}</p>
    </div>
  )
}

export default LotteryInfo