const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
  cryptoName: {
    type: String,
    required: true
  },
  cryptoSymbol: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  releaseDate: {
    type: Date
  },
  userSubmissionName: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Crypto = mongoose.model('crypto', CryptoSchema);