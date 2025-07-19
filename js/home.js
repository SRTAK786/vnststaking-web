// होम पेज इनिशियलाइज़ेशन
document.addEventListener('DOMContentLoaded', async () => {
  if (!isConnected) return;
  
  try {
    // कॉन्ट्रैक्ट स्टैट्स लोड करें
    const stats = await stakingContract.methods.getContractStats().call();
    
    // UI अपडेट
    document.getElementById('totalUsers').textContent = stats[0];
    document.getElementById('totalStakedInContract').textContent = 
      `${web3.utils.fromWei(stats[1], 'ether')} VNST`;
    document.getElementById('totalVNTWithdrawn').textContent = 
      `${web3.utils.fromWei(stats[3], 'ether')} VNT`;
      
  } catch (error) {
    console.error("होम पेज डेटा लोड करने में त्रुटि:", error);
  }
});