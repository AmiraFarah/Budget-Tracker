const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema ({
                                    accountNum :
                                            { type : String,
                                              unique : true ,
                                              required : true },
                                   deposit : Number,
                                   withdrawl : Number ,
                                   balance : Number ,
                                   date : Date
                                  })

module.exports = mongoose.model('Account',accountSchema)