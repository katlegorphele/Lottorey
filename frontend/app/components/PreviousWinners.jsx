import React from 'react'

const PreviousWinners = () => {
    const winners = [
        { address: '0xabc...', prize: '2 ETH' },
        { address: '0xdef...', prize: '1.5 ETH' },
      ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Previous Winners</h2>
      <ul>
        {winners.map((winner, index) => (
          <li key={index} className="mb-2">
            {winner.address} - {winner.prize}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PreviousWinners