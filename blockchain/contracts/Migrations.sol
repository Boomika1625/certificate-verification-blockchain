// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.16;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() {
        owner = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == owner, "This function is restricted");
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }
}
