const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    privateKey: String,
    address: String,
    symbol: String,
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;