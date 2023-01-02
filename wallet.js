const Wallet = require('ethereumjs-wallet');

// Membuat wallet baru menggunakan Ethereumjs-wallet
const wallet = Wallet['default'].generate();

// Public key dari wallet
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);

// Private key dari wallet
const privateKey = wallet.getPrivateKeyString();
console.log(privateKey);
