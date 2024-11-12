const UniswapPool = artifacts.require("UniswapPool");
const TokenA = artifacts.require("TokenA");
const TokenB = artifacts.require("TokenB");

module.exports = async function (deployer, network, accounts) {
    // 部署两个代币合约
    await deployer.deploy(TokenA);
    await deployer.deploy(TokenB);

    const tokenA = await TokenA.deployed();
    const tokenB = await TokenB.deployed();

    // 部署流动性池合约
    await deployer.deploy(UniswapPool, tokenA.address, tokenB.address);
};