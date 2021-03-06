# bscnjs-lib
This is an extend lib for bitcoinjs-lib.
It extends the network type of bitcoinjs-lib.
It also provides an useful lib to help you building BSCN transactions.

## Installation
``` bash
npm install bscnjs-lib
```

## Setup
### Node.js
``` javascript
var bscnjs = require('bscnjs-lib')
```

## New features
### Network
```js
{
    bscn: {
        messagePrefix: '\x15Bscn Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0878c22a,
            private: 0x0878bda8
        },
        pubKeyHash: 0x1a,
        scriptHash: 0x32,
        wif: 0x80
    },
    bscn_testnet: {
        messagePrefix: '\x15Bscn Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x084226ab,
            private: 0x08423661
        },
        pubKeyHash: 0x55,
        scriptHash: 0x6e,
        wif: 0xef
    }
}

```

### Utils
#### Utils.selectTxs
```javascript
/**
 * This is a function for selecting BSCN utxos to build transactions
 * the transaction object takes at least 3 fields, value(unit is 1e-8 BSCN) , confirmations and isStake
 *
 * @param [transaction] unspentTransactions
 * @param Number amount(unit: BSCN)
 * @param Number fee(unit: BSCN)
 * @returns [transaction]
 */
function selectTxs(unspentTransactions, amount, fee)
```
#### Utils.buildPubKeyHashTransaction
```javascript
/**
 * This is a helper function to build a pubkeyhash transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 BSCN), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String to
 * @param Number amount(unit: BSCN)
 * @param Number fee(unit: BSCN)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildPubKeyHashTransaction(keyPair, to, amount, fee, utxoList)
```
#### Utils.buildCreateContractTransaction
```javascript
/**
 * This is a helper function to build a create-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 BSCN), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String code The contract byte code
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 BSCN/gas)
 * @param Number fee(unit: BSCN)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildCreateContractTransaction(keyPair, code, gasLimit, gasPrice, fee, utxoList)
```
#### Utils.buildSendToContractTransaction
```javascript
/**
 * This is a helper function to build a send-to-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 BSCN), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String contractAddress The contract address
 * @param String encodedData The encoded abi data
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 BSCN/gas)
 * @param Number fee(unit: BSCN)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildSendToContractTransaction(keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList)
```
