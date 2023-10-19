window.connect = async function(){
    if (window.ethereum) {
    
     await window.ethereum.request({ method: "eth_requestAccounts" });
     window.web3 = new Web3(window.ethereum);
     OneSignal.login(window.ethereum.selectedAddress.toLowerCase().slice(2));
     //OneSignal.User.addAlias("ALIAS_LABEL", "ALIAS_ID"); //removed at https://youtu.be/cb1TE1SDFpI?si=uTabmT-kvzSOyVNA&t=1288
     OneSignal.Notifications.requestPermission();
     
    } else {
     console.log("No wallet");
    }
}