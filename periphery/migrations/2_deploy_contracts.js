var Router = artifacts.require("UniswapV2Router02.sol");
var WETH = artifacts.require("WETH.sol");

module.exports = async function(deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0xE18ed0beD68617Bd4446Ce7A72fdc4e2a5Dae8DF';
  // deployment steps

  if(network === 'mainnet'){
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {

    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);

};