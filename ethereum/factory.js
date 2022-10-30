// factory.js
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x276d02e677F7062294f52daDae42CefBDFD1CdfA'
);

export default instance;