import { ChugSplashConfig } from '@chugsplash/core'
import { predeploys } from '../src/constants'

const config: ChugSplashConfig = {
  options: {
    projectName: 'optimism',
    projectOwner: '0x68108902De3A5031197a6eB3b74b3b033e8E8e4d'
  },
  contracts: {
    L1CrossDomainMessenger: {
      contract: 'L1CrossDomainMessenger',
      variables: {
        _initialized: true,
        _owner: '0x68108902De3A5031197a6eB3b74b3b033e8E8e4d',
        _status: 1,
        OTHER_MESSENGER: predeploys.L2CrossDomainMessenger,
        xDomainMsgSender: '0x000000000000000000000000000000000000dEaD',
        msgNonce: 0,
        PORTAL: { "!Ref": "OptimismPortal" },
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
      }
    },
    L1ERC721Bridge: {
      contract: 'L1ERC721Bridge',
      variables: {
        MESSENGER: { "!Ref": "L1CrossDomainMessenger" },
        OTHER_BRIDGE: predeploys.L2ERC721Bridge,
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
      }
    },
    L1StandardBridge: {
      contract: 'L1StandardBridge',
      variables: {
        MESSENGER: { "!Ref": "L1CrossDomainMessenger" },
        OTHER_BRIDGE: predeploys.L2StandardBridge,
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
      }
    },
    L2OutputOracle: {
      contract: 'L2OutputOracle',
      variables: {
        _initialized: true,
        SUBMISSION_INTERVAL: 20,
        HISTORICAL_TOTAL_BLOCKS: 0,
        STARTING_BLOCK_NUMBER: 0,
        STARTING_TIMESTAMP: 0,
        L2_BLOCK_TIME: 2,
        proposer: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        _owner: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
        latestBlockNumber: 0,
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
        // TODO: Make this work
        // l2Outputs: {
        //   0: {
        //     outputRoot: '0x0000000000000000000000000000000000000000000000000000000000000000',
        //     timestamp: 0,
        //   }
        // }
      }
    },
    OptimismPortal: {
      contract: 'OptimismPortal',
      variables: {
        _initialized: true,
        params: {
          prevBaseFee: 1_000_000_000,
          prevBoughtGas: 0,
          prevBlockNum: 0,
        },
        FINALIZATION_PERIOD_SECONDS: 2,
        L2_ORACLE: { "!Ref": "L2OutputOracle" },
        l2Sender: '0x000000000000000000000000000000000000dEaD',
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
      }
    },
    SystemConfig: {
      contract: 'SystemConfig',
      variables: {
        _initialized: true,
        _owner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
        overhead: 0,
        scalar: 1,
        batcherHash: '0x0000000000000000000000003C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        gasLimit: 15000000,
        MAJOR_VERSION: 0,
        MINOR_VERSION: 0,
        PATCH_VERSION: 1,
      }
    }
  }
}

export default config
