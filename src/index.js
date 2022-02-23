var bscnjs = require('bitcoinjs-lib')

Object.assign(bscnjs.networks, require('./networks'))

bscnjs.utils = require('./utils')

module.exports = bscnjs