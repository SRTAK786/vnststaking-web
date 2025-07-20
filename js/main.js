import CONFIG from './config.js';
import { initHomePage } from './home.js';
import { initStakePage } from './stake.js';
import { initTeamPage } from './team.js';

// ग्लोबल वेरिएबल्स
let web3;
let vnstTokenContract;
let stakingContract;
let accounts = [];
let isConnected = false;

// नेटवर्क स्विच बटन के लिए
function setupNetworkSwitcher() {
  const switchBtn = document.getElementById('networkSwitchBtn');
  if (switchBtn) {
    switchBtn.addEventListener('click', async () => {
      try {
        const newNetworkType = CONFIG.currentNetworkType === 'testnet' ? 'mainnet' : 'testnet';
        CONFIG.switchNetwork(newNetworkType);
        
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${CONFIG.currentNetwork.chainId.toString(16)}` }],
        });
        
        await initWeb3();
        updateNetworkIndicator();
        location.reload();
      } catch (error) {
        console.error("नेटवर्क स्विच करने में त्रुटि:", error);
      }
    });
  }
}

// नेटवर्क इंडिकेटर अपडेट
function updateNetworkIndicator() {
  const networkIndicator = document.getElementById('networkIndicator');
  if (networkIndicator) {
    networkIndicator.textContent = CONFIG.currentNetworkType === 'testnet' ? 'Testnet' : 'Mainnet';
    networkIndicator.style.backgroundColor = CONFIG.currentNetworkType === 'testnet' ? '#ff9800' : '#4caf50';
    
    const switchBtn = document.getElementById('networkSwitchBtn');
    if (switchBtn) {
      switchBtn.textContent = CONFIG.currentNetworkType === 'testnet' 
        ? 'Switch to Mainnet' 
        : 'Switch to Testnet';
    }
  }
}

async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      const chainId = await web3.eth.getChainId();
      if (chainId !== CONFIG.currentNetwork.chainId) {
        alert(`कृपया सही नेटवर्क पर स्विच करें (Chain ID: ${CONFIG.currentNetwork.chainId})`);
        return false;
      }
      
      accounts = await web3.eth.getAccounts();
      isConnected = accounts.length > 0;
      initContracts();
      return true;
    } catch (error) {
      console.error("Web3 इनिशियलाइज़ेशन में त्रुटि:", error);
      return false;
    }
  } else {
    console.log("मेटामास्क इंस्टॉल नहीं है");
    return false;
  }
}

function initContracts() {
  try {
    vnstTokenContract = new web3.eth.Contract(
      CONFIG.contractABIs.vnstTokenABI, 
      CONFIG.contractAddresses.vnstToken
    );
    stakingContract = new web3.eth.Contract(
      CONFIG.contractABIs.stakingABI, 
      CONFIG.contractAddresses.staking
    );
    console.log("कॉन्ट्रैक्ट्स सफलतापूर्वक इनिशियलाइज़ हो गए");
    return true;
  } catch (error) {
    console.error("कॉन्ट्रैक्ट इनिशियलाइज़ेशन में त्रुटि:", error);
    return false;
  }
}

async function connectWallet() {
  try {
    if (!window.ethereum) {
      alert("कृपया मेटामास्क इंस्टॉल करें");
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
    console.error("वॉलेट कनेक्शन में त्रुटि:", error);
  }
}

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

function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const connectBtn = document.getElementById('connectWalletBtn');
  if (connectBtn) {
    connectBtn.addEventListener('click', connectWallet);
  }

  setupNetworkSwitcher();
  updateNetworkIndicator();
  
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
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
  
  if (window.ethereum && window.ethereum.selectedAddress) {
    await initWeb3();
    updateWalletButton();
  }
});

export { web3, accounts, isConnected, vnstTokenContract, stakingContract, connectWallet, initWeb3, approveTokens, stakeTokens, claimRewards };
