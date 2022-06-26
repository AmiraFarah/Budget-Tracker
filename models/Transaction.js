const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema ({
                                    userName :
                                            { type : String,
                                              unique : true ,
                                              required : true },
                                   deposit : Number,
                                   withdrawl : Number ,
                                   balance : Number ,
                                   date : Date
                                  })

module.exports = mongoose.model('Transaction',transactionSchema)