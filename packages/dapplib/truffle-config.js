require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone street crawl snow hospital give glide flat gasp'; 
let testAccounts = [
"0x32769f1dbfd031f5eee20b2409761a8accb0e5908f86f189e2ffc746e3d098c8",
"0xbd5bcf5abf266fdc79aab44abc225cc04c48b40dc0b32b3e783af7a36a66a160",
"0xcee4a6545b89d0b04be15f9d934d9ec4f2f1a7e4a0c97c58149a1e698905325f",
"0x2913525da483fcff7b30a31c13b200f214f99d2e814f47ad09774c460762c0ca",
"0x05a32792b94ca4b91aff89bcbc0bab27e9e80ddb07659a5f8411d6d1e432385e",
"0xb5a3308b8ca379ca2da5b3adb4fb7c4ed7aa0305abba5ed3dccc4899096fb5f6",
"0xf2595a756862ffa41162ef808808f33b04aff7aeaf9d54dd1fe9504dfd21242c",
"0x785da00c7a94293f1fd96ef7aef00ebaeaf983efc7f8a29db3704e75e828babe",
"0x2bc62a227fc5f06755a5fce4215cd78471be865d252c21180d7652b9789822e7",
"0x4c5d61dc32282211cc754150d1aaa671899bc502a6d542ace08141287fd12d86"
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
