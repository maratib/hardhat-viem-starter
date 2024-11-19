// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract MyContract {
    string public symbol;

    // uint public unlockTime;
    // address payable public owner;

    // event Withdrawal(uint amount, uint when);

    constructor(string memory _symbol) {
        symbol = _symbol;
        console.log("Hello from MyContract : ", _symbol);
    }
}
