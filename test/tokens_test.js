const TokenA = artifacts.require("TokenA");
const TokenB = artifacts.require("TokenB");

contract("Token Tests", accounts => {
    let tokenA, tokenB;
    const [owner] = accounts;

    before(async () => {
        tokenA = await TokenA.deployed();
        tokenB = await TokenB.deployed();
    });

    it("应该正确设置代币名称和符号", async () => {
        const nameA = await tokenA.name();
        const symbolA = await tokenA.symbol();
        const nameB = await tokenB.name();
        const symbolB = await tokenB.symbol();

        assert.equal(nameA, "Token A", "Token A 名称错误");
        assert.equal(symbolA, "TKA", "Token A 符号错误");
        assert.equal(nameB, "Token B", "Token B 名称错误");
        assert.equal(symbolB, "TKB", "Token B 符号错误");
    });

    it("应该给部署者正确数量的代币", async () => {
        const balanceA = await tokenA.balanceOf(owner);
        const balanceB = await tokenB.balanceOf(owner);

        const expectedBalance = web3.utils.toBN('1000000000000000000000000'); // 100万代币

        assert.equal(balanceA.toString(), expectedBalance.toString(), "Token A 余额错误");
        assert.equal(balanceB.toString(), expectedBalance.toString(), "Token B 余额错误");
    });
}); 