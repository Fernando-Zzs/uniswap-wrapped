// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract UniswapPool is ERC20, ReentrancyGuard {
    IERC20 public token0;
    IERC20 public token1;
    
    uint public reserve0;
    uint public reserve1;
    
    constructor(address _token0, address _token1) ERC20("UniswapLP", "ULP") {
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }
    
    // 添加流动性
    function addLiquidity(uint amount0, uint amount1) external nonReentrant returns (uint liquidity) {
        token0.transferFrom(msg.sender, address(this), amount0);
        token1.transferFrom(msg.sender, address(this), amount1);
        
        uint _totalSupply = totalSupply();
        if (_totalSupply == 0) {
            liquidity = Math.sqrt(amount0 * amount1);
        } else {
            liquidity = Math.min(
                (amount0 * _totalSupply) / reserve0,
                (amount1 * _totalSupply) / reserve1
            );
        }
        
        require(liquidity > 0, "INSUFFICIENT_LIQUIDITY_MINTED");
        _mint(msg.sender, liquidity);
        
        _update(token0.balanceOf(address(this)), token1.balanceOf(address(this)));
    }
    
    // 移除流动性
    function removeLiquidity(uint liquidity) external nonReentrant returns (uint amount0, uint amount1) {
        require(liquidity > 0, "INSUFFICIENT_LIQUIDITY_BURNED");
        
        uint balance0 = token0.balanceOf(address(this));
        uint balance1 = token1.balanceOf(address(this));
        uint _totalSupply = totalSupply();
        
        amount0 = (liquidity * balance0) / _totalSupply;
        amount1 = (liquidity * balance1) / _totalSupply;
        
        require(amount0 > 0 && amount1 > 0, "INSUFFICIENT_LIQUIDITY");
        
        _burn(msg.sender, liquidity);
        
        token0.transfer(msg.sender, amount0);
        token1.transfer(msg.sender, amount1);
        
        _update(token0.balanceOf(address(this)), token1.balanceOf(address(this)));
    }
    
    // 交换代币
    function swap(uint amountIn, address tokenIn, uint minAmountOut) external nonReentrant returns (uint amountOut) {
        require(tokenIn == address(token0) || tokenIn == address(token1), "INVALID_TOKEN");
        
        bool isToken0 = tokenIn == address(token0);
        (IERC20 tokenInput, IERC20 tokenOutput, uint reserveIn, uint reserveOut) = isToken0
            ? (token0, token1, reserve0, reserve1)
            : (token1, token0, reserve1, reserve0);
            
        tokenInput.transferFrom(msg.sender, address(this), amountIn);
        
        // 计算输出金额（使用恒定乘积公式）
        uint amountInWithFee = amountIn * 997; // 0.3% 手续费
        amountOut = (amountInWithFee * reserveOut) / ((reserveIn * 1000) + amountInWithFee);
        require(amountOut >= minAmountOut, "INSUFFICIENT_OUTPUT_AMOUNT");
        
        tokenOutput.transfer(msg.sender, amountOut);
        
        _update(token0.balanceOf(address(this)), token1.balanceOf(address(this)));
    }
    
    // 更新储备量
    function _update(uint balance0, uint balance1) private {
        reserve0 = balance0;
        reserve1 = balance1;
    }
} 