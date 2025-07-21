// Network Configuration
const NETWORKS = {
  bscTestnet: {
    chainId: 97,
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "tBNB",
      decimals: 18
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    iconUrls: [""]
  },
  bscMainnet: {
    chainId: 56,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
    iconUrls: [""]
  }
};

// Contract Addresses (Testnet and Mainnet)
const CONTRACT_ADDRESSES = {
  testnet: {
    vnstToken: "0x37c401DdBC8030c63BF3B3b2816Ba379BfD10474",
    staking: "0x93a21c975C49cD81dc76fF920A682C900Ed5208e"
  },
  mainnet: {
    vnstToken: "MAINNET_VNST_TOKEN_ADDRESS_HERE",
    staking: "MAINNET_STAKING_CONTRACT_ADDRESS_HERE"
  }
};

// Contract ABIs
const CONTRACT_ABIS = {
  vnstTokenABI: [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
  stakingABI: [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"DirectRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"LevelUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"MaxManualStakeLimitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minVNT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minUSDT","type":"uint256"}],"name":"MinWithdrawAmountsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"MinWithdrawToggled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalUsers","type":"uint256"}],"name":"NewUserJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"PercentageCheckFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"RewardPercentageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"RoiRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"activeStake","type":"uint256"}],"name":"StakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalTeamStake","type":"uint256"}],"name":"TeamStakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"name":"VNTWithdrawn","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"countedAsValidReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"curUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractStats","outputs":[{"internalType":"uint256","name":"usersCount","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"activeStake","type":"uint256"},{"internalType":"uint256","name":"vntWithdrawn","type":"uint256"},{"internalType":"uint256","name":"txCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLevelDetails","outputs":[{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256[]","name":"levelDeposits","type":"uint256[]"},{"internalType":"bool[]","name":"levelsAchieved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinWithdrawInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getReferralEarnings","outputs":[{"internalType":"uint256","name":"totalReferralRewards","type":"uint256"},{"internalType":"uint256","name":"totalTeamDeposits","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeIndex","type":"uint256"}],"name":"getStakeDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startDays","type":"uint256[]"},{"internalType":"bool[]","name":"isActive","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTeamUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalReferralEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalTeamStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserStakeDetails","outputs":[{"internalType":"uint256","name":"manualStake","type":"uint256"},{"internalType":"uint256","name":"autoStake","type":"uint256"},{"internalType":"uint256","name":"totalStake","type":"uint256"},{"internalType":"uint256","name":"remainingManualLimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getValidReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"isLevelUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxManualStakePerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRewardPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUSDTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minVNTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setDirectRewardPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLimit","type":"uint256"}],"name":"setMaxManualStakeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minVNT","type":"uint256"},{"internalType":"uint256","name":"_minUSDT","type":"uint256"}],"name":"setMinWithdrawAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"setRewardPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setRoiOfRoiPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"toggleMinWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalActiveStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedInContract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakingTransactions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVNTWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"useMinWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userLevelDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalManualStaked","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"validDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawHistory","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"}]
};

// Current network settings (default: testnet)
let currentNetwork = NETWORKS.bscTestnet;
let currentNetworkType = 'testnet';

// Global variables
let web3;
let vnstTokenContract;
let stakingContract;
let accounts = [];
let isConnected = false;

// Switch network function
function switchNetwork(networkType) {
  currentNetworkType = networkType;
  currentNetwork = networkType === 'testnet' ? NETWORKS.bscTestnet : NETWORKS.bscMainnet;
  console.log(`Network switched to: ${currentNetwork.chainName}`);
}

// Initialize Web3
async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      const chainId = await web3.eth.getChainId();
      if (chainId !== currentNetwork.chainId) {
        alert(`Please switch to the correct network (Chain ID: ${currentNetwork.chainId})`);
        return false;
      }
      
      accounts = await web3.eth.getAccounts();
      isConnected = accounts.length > 0;
      initContracts();
      return true;
    } catch (error) {
      console.error("Web3 initialization error:", error);
      return false;
    }
  } else {
    console.log("MetaMask not installed");
    return false;
  }
}

// Initialize contracts
function initContracts() {
  try {
    vnstTokenContract = new web3.eth.Contract(
      CONTRACT_ABIS.vnstTokenABI, 
      CONTRACT_ADDRESSES[currentNetworkType].vnstToken
    );
    stakingContract = new web3.eth.Contract(
      CONTRACT_ABIS.stakingABI, 
      CONTRACT_ADDRESSES[currentNetworkType].staking
    );
    console.log("Contracts initialized successfully");
    return true;
  } catch (error) {
    console.error("Contract initialization error:", error);
    return false;
  }
}

// Connect wallet
async function connectWallet() {
  try {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    isConnected = accounts.length > 0;
    
    if (isConnected) {
      updateWalletButton();
      await initWeb3();
      window.location.reload();
    }
  } catch (error) {
    console.error("Wallet connection error:", error);
  }
}

// Update wallet button UI
function updateWalletButton() {
  const connectBtn = document.getElementById('connectWalletBtn');
  if (!connectBtn) return;
  
  if (isConnected && accounts[0]) {
    const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
    connectBtn.textContent = shortAddress;
    connectBtn.classList.add('connected');
  } else {
    connectBtn.textContent = 'Connect Wallet';
    connectBtn.classList.remove('connected');
  }
}

// Setup network switcher
function setupNetworkSwitcher() {
  const switchBtn = document.getElementById('networkSwitchBtn');
  if (switchBtn) {
    switchBtn.addEventListener('click', async () => {
      try {
        const newNetworkType = currentNetworkType === 'testnet' ? 'mainnet' : 'testnet';
        switchNetwork(newNetworkType);
        
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${currentNetwork.chainId.toString(16)}` }],
        });
        
        await initWeb3();
        updateNetworkIndicator();
        location.reload();
      } catch (error) {
        console.error("Network switch error:", error);
      }
    });
  }
}

// Update network indicator
function updateNetworkIndicator() {
  const networkIndicator = document.getElementById('networkIndicator');
  if (networkIndicator) {
    networkIndicator.textContent = currentNetworkType === 'testnet' ? 'Testnet' : 'Mainnet';
    networkIndicator.style.backgroundColor = currentNetworkType === 'testnet' ? '#ff9800' : '#4caf50';
    
    const switchBtn = document.getElementById('networkSwitchBtn');
    if (switchBtn) {
      switchBtn.textContent = currentNetworkType === 'testnet' 
        ? 'Switch to Mainnet' 
        : 'Switch to Testnet';
    }
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

// Initialize home page
async function initHomePage() {
  if (!isConnected) {
    console.log("Wallet not connected");
    return;
  }
  
  try {
    // Load contract stats
    const stats = await stakingContract.methods.getContractStats().call();
    
    // Update UI
    document.getElementById('totalUsers').textContent = stats[0];
    document.getElementById('totalStakedInContract').textContent = 
      `${web3.utils.fromWei(stats[1], 'ether')} VNST`;
    document.getElementById('totalVNTWithdrawn').textContent = 
      `${web3.utils.fromWei(stats[3], 'ether')} VNT`;
    
    // Load user stats if connected
    if (accounts[0]) {
      const userStake = await stakingContract.methods.getUserStakeDetails(accounts[0]).call();
      document.getElementById('userStakedAmount').textContent = 
        `${web3.utils.fromWei(userStake.totalStake, 'ether')} VNST`;
      
      const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
      document.getElementById('pendingRewards').textContent = 
        `${web3.utils.fromWei(rewards[0], 'ether')} VNT`;
    }
  } catch (error) {
    console.error("Error loading home page data:", error);
    alert("नेटवर्क में समस्या है, बाद में प्रयास करें");
  }
}

// Initialize stake page
async function initStakePage() {
  if (!isConnected) {
    showConnectWalletMessage('staking-container');
    return;
  }
  
  try {
    await loadStakingData();
    setupStakeEventListeners();
  } catch (error) {
    console.error("Error initializing stake page:", error);
  }
}

// Load staking data
async function loadStakingData() {
  try {
    if (!isConnected || !accounts[0]) return;

    // Wallet balance
    const balance = await vnstTokenContract.methods.balanceOf(accounts[0]).call();
    document.getElementById('walletBalance').textContent = 
      `${web3.utils.fromWei(balance, 'ether')} VNST`;
    
    // User's staked amount
    const userStake = await stakingContract.methods.getUserStakeDetails(accounts[0]).call();
    document.getElementById('userStakedAmount').textContent = 
      `${web3.utils.fromWei(userStake.totalStake, 'ether')} VNST`;
    
    // Pending rewards
    const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
    document.getElementById('stakingRewards').textContent = 
      `${web3.utils.fromWei(rewards[0], 'ether')} VNT`;
    document.getElementById('directRewards').textContent = 
      `${web3.utils.fromWei(rewards[1], 'ether')} USDT`;

    await updateStakingLimits();
  } catch (error) {
    console.error("Error loading staking data:", error);
    alert("डेटा लोड करने में समस्या, कृपया बाद में प्रयास करें");
  }
}

// Update staking limits
async function updateStakingLimits() {
  const limits = await stakingContract.methods.getMinWithdrawInfo().call();
  document.getElementById('minVNTWithdraw').textContent = web3.utils.fromWei(limits[0], 'ether');
  document.getElementById('minUSDTWithdraw').textContent = web3.utils.fromWei(limits[1], 'ether');
}

// Setup stake event listeners
function setupStakeEventListeners() {
  const approveBtn = document.getElementById('approveMaxBtn');
  if (approveBtn) {
    approveBtn.addEventListener('click', async () => {
      try {
        await approveTokens();
      } catch (error) {
        console.error("Approval failed:", error);
      }
    });
  }

  const stakeBtn = document.getElementById('stakeBtn');
  if (stakeBtn) {
    stakeBtn.addEventListener('click', async () => {
      try {
        await stakeTokens();
      } catch (error) {
        console.error("Staking failed:", error);
      }
    });
  }
  
  const claimBtn = document.getElementById('claimTokenBtn');
  if (claimBtn) {
    claimBtn.addEventListener('click', async () => {
      try {
        await claimRewards();
      } catch (error) {
        console.error("Claim failed:", error);
      }
    });
  }
}

// Approve tokens for staking
async function approveTokens() {
  try {
    const maxAmount = web3.utils.toWei('10000', 'ether');
    await vnstTokenContract.methods.approve(stakingContract.options.address, maxAmount)
      .send({ from: accounts[0] });
    alert("Approval successful! You can now stake VNST tokens");
  } catch (error) {
    console.error("Approval error:", error);
    alert(`Approval failed: ${error.message}`);
  }
}

// Stake tokens
async function stakeTokens() {
  const amountInput = document.getElementById('stakeAmount');
  if (!amountInput) return;
  
  const amount = amountInput.value;
  if (!amount || amount < 100 || amount > 10000) {
    alert("Please enter a valid amount between 100 and 10,000 VNST");
    return;
  }
  
  try {
    const amountWei = web3.utils.toWei(amount, 'ether');
    await stakingContract.methods.stake(amountWei, accounts[0])
      .send({ from: accounts[0] });
    alert("Staking successful!");
    await loadStakingData();
  } catch (error) {
    console.error("Staking error:", error);
    alert(`Staking failed: ${error.message}`);
  }
}

// Claim rewards
async function claimRewards() {
  try {
    await stakingContract.methods.claimRewards()
      .send({ from: accounts[0] });
    alert("Rewards claimed successfully!");
    await loadStakingData();
  } catch (error) {
    console.error("Claim error:", error);
    alert(`Claim failed: ${error.message}`);
  }
}

// Initialize team page
async function initTeamPage() {
  if (!isConnected) {
    showConnectWalletMessage('team-grid');
    return;
  }
  
  try {
    await loadTeamData();
  } catch (error) {
    console.error("Error loading team data:", error);
  }
}

// Load team data
async function loadTeamData() {
  try {
    // User level data
    const userLevel = await stakingContract.methods.getUserLevel(accounts[0]).call();
    document.getElementById('userLevel').textContent = userLevel;
    
    // Team members
    for (let i = 1; i <= 5; i++) {
      try {
        const team = await stakingContract.methods.getTeamUsers(accounts[0], i-1).call();
        document.getElementById(`level${i}Count`).textContent = `${team.length} Members`;
        
        // Load additional team data if needed
        const levelDeposits = await stakingContract.methods.getLevelDetails(accounts[0]).call();
        document.getElementById(`level${i}Deposit`).textContent = 
          `${web3.utils.fromWei(levelDeposits.levelDeposits[i-1], 'ether')} VNST`;
      } catch (error) {
        console.error(`Error loading level ${i} data:`, error);
        alert("टीम डेटा लोड नहीं हो पाया");
        document.getElementById(`level${i}Count`).textContent = "0 Members";
      }
    }
    
    // Load referral earnings
    const referralEarnings = await stakingContract.methods.getReferralEarnings(accounts[0]).call();
    document.getElementById('totalReferralEarnings').textContent = 
      `${web3.utils.fromWei(referralEarnings.totalReferralRewards, 'ether')} VNST`;
    document.getElementById('totalTeamDeposits').textContent = 
      `${web3.utils.fromWei(referralEarnings.totalTeamDeposits, 'ether')} VNST`;
  } catch (error) {
    console.error("Error loading team data:", error);
  }
}

// Show connect wallet message
function showConnectWalletMessage(containerClass) {
  const container = document.querySelector(`.${containerClass}`);
  if (container) {
    container.innerHTML = `
      <div class="connect-warning">
        <h3>Please connect your wallet to view this content</h3>
        <button id="connectWalletBtnPage" class="btn">Connect Wallet</button>
      </div>
    `;
    
    document.getElementById('connectWalletBtnPage').addEventListener('click', connectWallet);
  }
}

// Generate referral link
function generateReferralLink() {
  if (!isConnected || !accounts[0]) return;
  
  const referralLink = `${window.location.origin}?ref=${accounts[0]}`;
  const referralLinkElement = document.getElementById('referralLink');
  if (referralLinkElement) {
    referralLinkElement.value = referralLink;
    
    // Add copy functionality
    const copyBtn = document.getElementById('copyReferralBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        referralLinkElement.select();
        document.execCommand('copy');
        alert('Referral link copied to clipboard!');
      });
    }
  }
}

// Initialize the app
window.addEventListener('DOMContentLoaded', async () => {
  // Setup wallet connection
  const connectBtn = document.getElementById('connectWalletBtn');
  if (connectBtn) {
    connectBtn.addEventListener('click', connectWallet);
  }

  // Setup network switcher
  setupNetworkSwitcher();
  updateNetworkIndicator();
  
  // Setup mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Initialize Web3 if already connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    await initWeb3();
    updateWalletButton();
  }
  
  // Initialize page based on current route
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/') {
    await initHomePage();
  } 
  else if (path.endsWith('stake.html')) {
    await initStakePage();
  }
  else if (path.endsWith('team.html')) {
    await initTeamPage();
  }
  
  // Generate referral link if on referral page
  generateReferralLink();
});
