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
  const [lotteryHistory, setLotteryHistory] = useState([]);
  const [lotteryId, setLotteryId] = useState('');

  const getLotteryID = async () => {
    const data = await readContract({
      contract: lotteryContract,
      method:
        "function lotteryId() view returns (uint256)",
    });
    setLotteryId(data)
  }

  const getLotteryHistory = async (_LottoID) => {
    setLotteryHistory([])
    for (let i = parseInt(id); i > 0; i--) {
      const data = await readContract({
        contract: lotteryContract,
        method:
          "function getWinnerByLottery(uint256 _lottery) view returns (address)",
          params: [_LottoID]
      });

      setLotteryHistory(lotteryHistory => [...lotteryHistory, { id: i, address: winnerAddress }])
    }
  }

  useEffect(() => {
    getLotteryID();
    getLotteryHistory();
  })

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Previous Winners</h2>
      <ul>
        {lotteryHistory &&
          lotteryHistory.length > 0 &&
          lotteryHistory.map((item) => {
            if (lotteryId != item.id) {
              return (
                <div className="history-entry mt-3" key={item.id}>
                  <div>Lottery #{item.id} winner:</div>
                  <div>
                    <a
                      href={`https://etherscan.io/address/633C37/${item.address}`}
                      target="_bank"
                    >
                      {item.address}
                    </a>
                  </div>
                </div>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default PreviousWinners;
