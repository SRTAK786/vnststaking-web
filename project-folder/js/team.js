// टीम पेज इनिशियलाइज़ेशन
document.addEventListener('DOMContentLoaded', async () => {
  if (!isConnected) {
    showConnectWalletMessage();
    return;
  }
  
  try {
    await loadTeamData();
  } catch (error) {
    console.error("टीम डेटा लोड करने में त्रुटि:", error);
  }
});

async function loadTeamData() {
  // यूजर लेवल डेटा
  const userLevel = await stakingContract.methods.getUserLevel(accounts[0]).call();
  document.getElementById('userLevel').textContent = userLevel;
  
  // टीम मेम्बर्स
  for (let i = 1; i <= 5; i++) {
    try {
      const team = await stakingContract.methods.getTeamUsers(accounts[0], i-1).call();
      document.getElementById(`level${i}Count`).textContent = `${team.length} Members`;
      
      // अन्य डेटा अपडेट...
    } catch (error) {
      console.error(`लेवल ${i} डेटा लोड करने में त्रुटि:`, error);
    }
  }
}

function showConnectWalletMessage() {
  const teamContainer = document.querySelector('.team-grid');
  if (teamContainer) {
    teamContainer.innerHTML = `
      <div class="connect-warning">
        <h3>कृपया टीम डेटा देखने के लिए अपना वॉलेट कनेक्ट करें</h3>
        <button id="connectWalletBtnTeam" class="btn">Connect Wallet</button>
      </div>
    `;
    
    document.getElementById('connectWalletBtnTeam').addEventListener('click', connectWallet);
  }
}