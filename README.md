# Hardhat Viem Starter
Hardhat, Viem, Typescript, mocha test env., Smart Contracts development, testing and
deployment.

### Installation
```bash
# Install hardhat shorthand (Instead of writting full npx hardhat, you can just use `hh`)
npm install --global hardhat-shorthand
hh help
hh compile 
hh clean
hh watch

# To deploy smart contract to ganache
npx hardhat run scripts/deploy.ts --network ganache

#Create a new folder (e.g hardhat-viem-starter)
npx hardhat init
- Create a TypeScript project (with Viem)
#Done
```

### Hardhat Watcher and deployment settings
```javascript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-watcher'

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        `0xfa709f51f4f14e3740a9e6c82a1dc983a27b28c4bfb7f41c6789aa87ebc508ea`,
      ],
    }
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
```

