"use client";

import React, { useState, useEffect } from "react";
import { getContract, defineChain, readContract } from "thirdweb";
import { client } from "../client";

const lotteryContract = getContract({
  client: client,
  chain: defineChain(4202),
  address: "0xa6207895057A787a8FaCdfD46BAdcC77125A543b",
  });

const PreviousWinners = () => {
  const [prevWinners, setPreviousWinners] = useState([]);
  const [lotteryHistory, setLotteryHistory] = useState('')
  const [lotteryId, setLotteryId] = useState('')



  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Previous Winners</h2>
      <ul>
        {prevWinners.map((winner, index) => (
          <li key={index} className="mb-2">
            {winner.address} - {winner.prize}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousWinners;
