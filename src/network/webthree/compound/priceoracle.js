const Contract = require("../smartcontract");
const PRICEORACLEABI = require("../abis/compound/priceoracle.json");

class PriceOracle extends Contract {
  async getUnderlyingPrice(cTokenAddress) {
    return (await this.contract.methods.getUnderlyingPrice(cTokenAddress).call()) / 1e18;
  }
}

exports.PriceOracle = PriceOracle;
exports.mainnet = new PriceOracle(
  "0xddc46a3b076aec7ab3fc37420a8edd2959764ec4",
  PRICEORACLEABI
);