const ethers = require('ethers');

const NFT=require('./artifacts/contracts/NFT.sol/NFT.json');
const Market=require('./artifacts/contracts/Market.sol/NFTMarket.json');
let nftmarketaddress = "0x5a5191A9eB9bD4C318f6aC456a6cE07561DD63D3";
let nftaddress = "0xAF74fd9204E696a1746FEcC6fBF3cBEA0c9642Ea";

async function main()
{
    const customHttpProvider = new ethers.providers.JsonRpcProvider("infura.url");
    customHttpProvider.getBlockNumber().then(async function(result){
        console.log("Current block number: " + result);
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, customHttpProvider);
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, customHttpProvider);
        const data = await marketContract.getListingPrice()
        console.log(data);
    });
}
main();