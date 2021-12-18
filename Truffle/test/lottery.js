const Lottery = artifacts.require("Lottery");

contract('Lottery', (accounts) => {
  it('Unit testing success', async () => {
    const lotteryInstance = await Lottery.deployed();
    await lotteryInstance.addAddress.call("0xe96C4D3EdF271B5c23B8C661eB3cd160f7e90818");
    await lotteryInstance.addAddress.call("0xD4d275CFC360815872eF152934859c819ACC97ca");
    await lotteryInstance.setRandomIndex();
    const length = (await lotteryInstance.getRemovedAddressList.call(0).length).toNumber();

    assert.equal(length, 2, "Unit testing fail");
  });
});
