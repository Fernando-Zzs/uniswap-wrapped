// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    constructor() ERC20("Token A", "TKA") {
        // 铸造 100万个代币给部署者
        // 因为 ERC20 默认是 18 位小数，所以需要乘以 10^18
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
