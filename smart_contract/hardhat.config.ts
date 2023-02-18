// https://eth-goerli.g.alchemy.com/v2/Vr7BEIP41Bcvj8_RUJ4dOFglbuT0AWSG

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
	defaultNetwork: "goerli",
	solidity: {
		version: "0.8.17"
	},
	networks: {
		goerli: {
			url: "https://eth-goerli.alchemyapi.io/v2/Vr7BEIP41Bcvj8_RUJ4dOFglbuT0AWSG",
			accounts: ["8c5e50e6481ec75f60818adf89bb9534f5a203345a88ce4fbac58e54c74a848f"]
		}
	}
};

export default config;