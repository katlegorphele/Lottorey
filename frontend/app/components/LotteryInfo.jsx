import React from 'react'

const LotteryInfo = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-black">
      <h2 className="text-lg font-bold mb-4">Lottery Information</h2>
      <p><strong>Connected Address:</strong> 0x1234...abcd</p>
      <p><strong>Contract Balance:</strong> 10 ETH</p>
      <p><strong>Pot:</strong> 5 ETH</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Enter Lottery
      </button>
    </div>
  )
}

export default LotteryInfo