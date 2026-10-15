import { createConfig } from "ponder";
import { mockTokenABI } from "./abis/abi";

export default createConfig({
  chains: {
    baseSepolia: {
      id: 84532,
      rpc: "https://sepolia.base.org",
    },
  },
  contracts: {
    SawitToken: {
      chain: "baseSepolia",
      abi: mockTokenABI,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 0,
    },
  },
});