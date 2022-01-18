require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6rZIj62kiFLa84Sht3Sn_Wzqr0WMTN4Q',
      accounts: ['647ccaf88016d293995ab4c5922b59f0a4cdc98b2e1ef287389145be586494f4']
    }
  }
}