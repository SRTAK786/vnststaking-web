import { isConnected, accounts, stakingContract } from './main.js';


// स्टेक पेज इनिशियलाइज़ेशन
document.addEventListener('DOMContentLoaded', async () => {
  if (!isConnected) {
    showConnectWalletMessage();
    return;
  }
  
  try {
    await loadStakingData();
    setupEventListeners();
  } catch (error) {
    console.error("स्टेक पेज इनिशियलाइज़ेशन में त्रुटि:", error);
  }
});

async function loadStakingData() {
  // वॉलेट बैलेंस
  const balance = await vnstTokenContract.methods.balanceOf(accounts[0]).call();
  document.getElementById('walletBalance').textContent = 
    `${web3.utils.fromWei(balance, 'ether')} VNST`;
    
  // यूजर का स्टेक्ड अमाउंट
  const userStake = await stakingContract.methods.getUserStakeDetails(accounts[0]).call();
  document.getElementById('userStakedAmount').textContent = 
    `${web3.utils.fromWei(userStake.totalStake, 'ether')} VNST`;
    
  // पेंडिंग रिवॉर्ड्स
  const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
  document.getElementById('stakingRewards').textContent = 
    `${web3.utils.fromWei(rewards[0], 'ether')} VNT`;
  document.getElementById('directRewards').textContent = 
    `${web3.utils.fromWei(rewards[1], 'ether')} USDT`;
}

function setupEventListeners() {
  const approveBtn = document.getElementById('approveMaxBtn');
  if (approveBtn) {
    approveBtn.addEventListener('click', approveTokens);
  }
  
  const stakeBtn = document.getElementById('stakeBtn');
  if (stakeBtn) {
    stakeBtn.addEventListener('click', stakeTokens);
  }
  
  const claimBtn = document.getElementById('claimTokenBtn');
  if (claimBtn) {
    claimBtn.addEventListener('click', claimRewards);
  }
}

async function approveTokens() {
  try {
    const maxAmount = web3.utils.toWei('10000', 'ether');
    await vnstTokenContract.methods.approve(CONFIG.stakingAddress, maxAmount)
      .send({ from: accounts[0] });
    alert("अप्रूवल सफल! अब आप VNST टोकन स्टेक कर सकते हैं");
  } catch (error) {
    console.error("अप्रूवल में त्रुटि:", error);
    alert(`अप्रूवल विफल: ${error.message}`);
  }
}

async function stakeTokens() {
  const amountInput = document.getElementById('stakeAmount');
  if (!amountInput) return;
  
  const amount = amountInput.value;
  if (!amount || amount < 100 || amount > 10000) {
    alert("कृपया 100 से 10,000 VNST के बीच वैध राशि दर्ज करें");
    return;
  }
  
  try {
    const amountWei = web3.utils.toWei(amount, 'ether');
    await stakingContract.methods.stake(amountWei, accounts[0])
      .send({ from: accounts[0] });
    alert("स्टेकिंग सफल!");
    await loadStakingData();
  } catch (error) {
    console.error("स्टेकिंग में त्रुटि:", error);
    alert(`स्टेकिंग विफल: ${error.message}`);
  }
}

function showConnectWalletMessage() {
  const stakeForm = document.querySelector('.staking-container');
  if (stakeForm) {
    stakeForm.innerHTML = `
      <div class="connect-warning">
        <h3>कृपया स्टेकिंग शुरू करने के लिए अपना वॉलेट कनेक्ट करें</h3>
        <button id="connectWalletBtnStake" class="btn">Connect Wallet</button>
      </div>
    `;
    
    document.getElementById('connectWalletBtnStake').addEventListener('click', connectWallet);
  }
}
