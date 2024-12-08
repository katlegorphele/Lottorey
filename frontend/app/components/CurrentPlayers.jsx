'use client'

import React, {useState, useEffect} from 'react'
import { getContract, defineChain,readContract } from "thirdweb";
import { client } from '../client';

const lotteryContract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0xa6207895057A787a8FaCdfD46BAdcC77125A543b"
});

const CurrentPlayers = () => {
  const [lotteryPlayers, setPlayers] = useState([])

  const getPlayers = async () => {
    const data = await readContract({
      contract: lotteryContract,
      method:
        "function getPlayers() view returns (address[])",
    });
    setPlayers(data);
  }

  useEffect(() => {
    getPlayers();
  })

  return (
    <div className="bg-white shadow rounded-lg p-6 text-black">
      <h2 className="text-lg font-bold mb-4">Current Players</h2>
      <ul>
        {lotteryPlayers.map((player, index) => (
          <li key={index} className="mb-2">
            {player}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrentPlayers