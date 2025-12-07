// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AccessLog {
    struct Event {
        address user;
        string action;
        uint256 risk;
        uint256 timestamp;
    }

    Event[] public events;

    event EventLogged(address indexed user, string action, uint256 risk, uint256 timestamp);

    function logEvent(address user, string memory action, uint256 risk) public {
        Event memory e = Event({
            user: user,
            action: action,
            risk: risk,
            timestamp: block.timestamp
        });
        events.push(e);
        emit EventLogged(user, action, risk, block.timestamp);
    }

    function getEventsCount() public view returns (uint256) {
        return events.length;
    }

    function getEvent(uint256 index) public view returns (address, string memory, uint256, uint256) {
        require(index < events.length, "Index out of range");
        Event memory e = events[index];
        return (e.user, e.action, e.risk, e.timestamp);
    }
}
