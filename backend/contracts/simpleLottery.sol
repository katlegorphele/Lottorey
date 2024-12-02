// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public admin; // Admin address
    address[] public players; // List of players
    uint256 public lotteryBalance; // Total balance in the pot
    event LottoWinner(address winner, uint256 amount);

    constructor() {
        admin = msg.sender; // Set the deployer as the admin
    }

    // Modifier to restrict access to admin-only functions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    // Function to enter the lottery
    function enterLottery() public payable {
        require(msg.value == 0.001 ether, "Entry fee is 0.001 ETH");
        players.push(msg.sender); // Add player to the list
        lotteryBalance += 1; // Increment the pot balance
    }

    // Function to pick a random winner
    function pickWinner() public onlyAdmin {
        require(players.length > 0, "No players in the lottery");

        // Generate a pseudo-random index
        uint256 randomIndex = uint256(
            keccak256(abi.encodePacked(block.timestamp, block.prevrandao, players))
        ) % players.length;

        address winner = players[randomIndex]; // Select the winner
        emit LottoWinner(winner, lotteryBalance); // Emit the event
        // payable(winner).transfer(lotteryBalance); // Transfer the pot to the winner

        // Reset the lottery
        delete players;
        lotteryBalance = 0;
    }

    // Get the list of current players
    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
