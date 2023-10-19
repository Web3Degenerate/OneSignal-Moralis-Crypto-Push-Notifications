require('dotenv').config()
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

app.use(express.json());
var port = process.env.PORT || 3000;
let users = [""]

const mockBody = {
  "confirmed": false,
  "chainId": "0xaa36a7",
  "abi": [],
  "streamId": "a27b54a0-004d-4854-895f-87d14e2bd0fe",
  "tag": "notifications",
  "retries": 0,
  "block": {
    "number": "4205330",
    "hash": "0x885fccbd28609084e56d03cf06dde9505317b3701dc38de9271d8238050e3f99",
    "timestamp": "1693587636"
  },
  "logs": [
    {
      "logIndex": "16",
      "transactionHash": "0x4d8798dcbeec7436567445e5e61a271ac47673e14460784e3b6253105ad781ba",
      "address": "0x7439e9bb6d8a84dd3a23fe621a30f95403f87fb9",
      "data": "0x00000000000000000000000000000000000000000000003635c9adc5dea00000",
      "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "topic1": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "topic2": "0x00000000000000000000000034140de4f088364d5929ffbc33eff2dc1472d10c",
      "topic3": null
    }
  ],
  "txs": [
    {
      "hash": "0x4d8798dcbeec7436567445e5e61a271ac47673e14460784e3b6253105ad781ba",
      "gas": "53091",
      "gasPrice": "1704815272",
      "nonce": "1",
      "input": "0x",
      "transactionIndex": "12",
      "fromAddress": "0x34140de4f088364d5929ffbc33eff2dc1472d10c",
      "toAddress": "0x7439e9bb6d8a84dd3a23fe621a30f95403f87fb9",
      "value": "0",
      "type": "2",
      "v": "0",
      "r": "79745447244070640223799461757642427453644670410837636474428485176193047885167",
      "s": "55076998538721609752526482340674483254071906994970627745066499142220706965239",
      "receiptCumulativeGasUsed": "2261648",
      "receiptGasUsed": "35394",
      "receiptContractAddress": null,
      "receiptRoot": null,
      "receiptStatus": "1"
    }
  ],
  "txsInternal": [],
  "erc20Transfers": [
    {
      "transactionHash": "0x4d8798dcbeec7436567445e5e61a271ac47673e14460784e3b6253105ad781ba",
      "logIndex": "16",
      "contract": "0x7439e9bb6d8a84dd3a23fe621a30f95403f87fb9",
      "from": "0x0000000000000000000000000000000000000000",
      "to": "0x34140de4f088364d5929ffbc33eff2dc1472d10c",
      "value": "1000000000000000000000",
      "tokenName": "Weenus 💪",
      "tokenSymbol": "WEENUS",
      "tokenDecimals": "18",
      "valueWithDecimals": "1000",
      "possibleSpam": false
    }
  ],
  "erc20Approvals": [],
  "nftTokenApprovals": [],
  "nftApprovals": {
    "ERC721": [],
    "ERC1155": []
  },
  "nftTransfers": [],
  "nativeBalances": []
}


const patientMockBody = {
    "confirmed": false,
    "chainId": "0x13881",
    "abi": [],
    "streamId": "933b8de7-0c90-4f21-a9c1-00156c0e407d",
    "tag": "youtube-push-notifications-test",
    "retries": 0,
    "block": {
        "number": "41324945",
        "hash": "0xc18e43e745d07454aca538195b053c240a568e438e05ad99eecc121fb8c2192d",
        "timestamp": "1697586534"
    },
    "logs": [
        {
            "logIndex": "14",
            "transactionHash": "0x4b0e9f72aad7387944078b1fd0f6ddb5dbf95225f16b6ae1831cadf1e0d31b1c",
            "address": "0x4779320da5e3ad1858a39422d62b5eedb7fd6c57",
            "data": "0x",
            "topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "topic1": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "topic2": "0x0000000000000000000000005ed76ea36b3a21d792fdf2453ce5639fbc920702",
            "topic3": "0x000000000000000000000000000000000000000000000000000000000000003f"
        }
    ],
    "txs": [
        {
            "hash": "0x4b0e9f72aad7387944078b1fd0f6ddb5dbf95225f16b6ae1831cadf1e0d31b1c",
            "gas": "69221",
            "gasPrice": "3415467033",
            "nonce": "8",
            "input": "0x91c0c9450000000000000000000000005ed76ea36b3a21d792fdf2453ce5639fbc920702",
            "transactionIndex": "6",
            "fromAddress": "0xfd0f327811bfef021c57da098d522694412c7ac6",
            "toAddress": "0x4779320da5e3ad1858a39422d62b5eedb7fd6c57",
            "value": "0",
            "type": "2",
            "v": "0",
            "r": "9417639485694868406609325122942862455655037451333495739540972536776302055311",
            "s": "36373816271940736391932640112820501237869903140847813592115663750412836346183",
            "receiptCumulativeGasUsed": "555525",
            "receiptGasUsed": "69221",
            "receiptContractAddress": null,
            "receiptRoot": null,
            "receiptStatus": "1"
        }
    ],
    "txsInternal": [],
    "erc20Transfers": [],
    "erc20Approvals": [],
    "nftTokenApprovals": [],
    "nftApprovals": {
        "ERC721": [],
        "ERC1155": []
    },
    "nftTransfers": [
        {
            "operator": null,
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x5ed76ea36b3a21d792fdf2453ce5639fbc920702",
            "tokenId": "63",
            "amount": "1",
            "transactionHash": "0x4b0e9f72aad7387944078b1fd0f6ddb5dbf95225f16b6ae1831cadf1e0d31b1c",
            "logIndex": "14",
            "contract": "0x4779320da5e3ad1858a39422d62b5eedb7fd6c57",
            "tokenName": "Rx NFT Minter v13.1",
            "tokenSymbol": "HMD",
            "tokenContractType": "ERC721",
            "possibleSpam": false
        }
    ],
    "nativeBalances": []
}


app.post('/moralis', async function (req, res) {
    res.json({ message: "Thank you for the message" });
    console.log("new hook");
    return handleHook(req.body);
})

// function handleHook(body = mockBody){
function handleHook(body = patientMockBody){
  if(body.confirmed){
    return;
  }
  let notifications = [];

  // To check for incoming erc20s
//   body.erc20Transfers.forEach( transfer => {
  // To check for NFT Transfers
  body.nftTransfers.forEach( transfer => {
    if(!transfer.possibleSpam){
      let receiver = users.find((element) => element === transfer.to);
      if(receiver){
        notifications.push({
          type: "erc721",
          sender: transfer.from,
          receiver: receiver,
        //   amount: transfer.amount,
          scriptId: transfer.tokenId,
          tokenName: transfer.tokenName, //Rx Minter 13.1 
  
        })
      }
    }
  })
  //check for native txs
  body.txs.forEach( transaction => {
    if(transaction.value > 0){
      let receiver = users.find((element) => element === transaction.toAddress);
      if(receiver){
        notifications.push({
          type: "native",
          sender: transaction.fromAddress,
          receiver: transaction.toAddress,
          amount: transaction.value,
          tokenName: "ETH"
        })
      }
    }
  })

  console.log(notifications);

  if(notifications.length > 0){
    sendNotifications(notifications);
  }
}

async function sendNotifications(notifications){

  notifications.forEach(notification => {
    console.log((notification));

    var options = {
      json: true,
      'method': 'POST',
      'url': 'https://onesignal.com/api/v1/notifications',
      'headers': {
        'Authorization': 'Basic INSERT_API_KEY',
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      "body": {
        "include_aliases": {"external_id": [notification.receiver.toLowerCase().slice(2)]},
        "target_channel": "push",
        "isAnyWeb": true,
        "contents": {"en": `You've successfully received a deposit`},
        "headings": {"en": `You've received ${notification.amount} ${notification.tokenName}`},
        "name": "Notification",
        "app_id": "INSERT_APP_ID"
      }
      
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });

    
  })
}



app.listen(port, function () {
   console.log(`App listening at ${port}`)
})