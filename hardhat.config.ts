import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import 'hardhat-watcher'


const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // ganache: {
    //   url: "HTTP://127.0.0.1:7545",
    //   accounts: [
    //     `0xfa709f51f4f14e3740a9e6c82a1dc983a27b28c4bfb7f41c6789aa87ebc508ea`,
    //   ],
    // }
  },
  paths: {
    artifacts: "./artifacts",
  },
  watcher: {
    compilation: {
      tasks: ['compile'],
      files: ['./contracts'],
      ignoredFiles: ['**/.vscode'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running my compilation task now..',
    },
    ci: {
      tasks: [
        'clean',
        { command: 'compile', params: { quiet: true } }
      ],
    },
  },
};

export default config;
