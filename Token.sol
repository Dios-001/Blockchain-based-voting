// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract simpleStorage{
    uint storedData;
    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns(uint){
        return storedData;
    }
}