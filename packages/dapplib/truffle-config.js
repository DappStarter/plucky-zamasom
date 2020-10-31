require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rule mad promote inflict kiwi equal gasp'; 
let testAccounts = [
"0x75f45b329a837b9221713e04b8021f406c81ff9271bc0c123b2b613802935c7c",
"0x51f65b0a53e138e726028649cc4a340d7f86c87311397c98b7e76581597fd1b4",
"0xc004a6f0acc0128c58c7751877b333553eacd8ef74fcaa5da17177592a249337",
"0x92bc7f21f47e6b14cfc710de6e7a4d06d6f7c2e680bebc12d407d5aa7492529b",
"0xf867a509ba0cc3f313b08abe26a7add8762d14dffc0a87bae71bfd34c40e535c",
"0x018e719d5d77440245d91a17c9c1f8adb64548d93a3f08ecc77da63620528ce9",
"0x167307093184195ad28c3b290fa2434fc6b30601311be04470675e1766d9b175",
"0x898430188626319453ffc8bc7dac5e45e7a90fa0b8cf6724bfeeeb54f65effd9",
"0x34e6c0b558a47cb173934f55b6f2ac2532e94c178312f7f83ec2dd7b4babf256",
"0x3d9d30588049410400c7d0f76b9b9e70e1bbe0325dc641136b7657fecffb43fc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
