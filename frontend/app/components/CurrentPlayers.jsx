import React from 'react'

const CurrentPlayers = () => {
    const players = ['0x123...', '0x456...', '0x789...'];

  return (
    <div className="bg-white shadow rounded-lg p-6 text-black">
      <h2 className="text-lg font-bold mb-4">Current Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index} className="mb-2">
            {player}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrentPlayers