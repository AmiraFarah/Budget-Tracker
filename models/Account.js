const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema ({
                                   deposit : Number,
                                   withdrawl : Number ,
                                   balance : Number ,
                                   date1 : Date
                                  })

module.exports = mongoose.model('Account',accountSchema)