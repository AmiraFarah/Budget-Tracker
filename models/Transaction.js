const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'  
   },
  trans_name: String,
  trans_type: String,
  amount: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transaction', transactionSchema)