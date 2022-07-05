const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
  password:
  {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  
  email:
  {
    type: String,
    required: true,
    trime: true,
    unique: true,
    lowercase: true
  },
  balance : Number ,

  },{
       timestamps :true,
       toJSON: {
    // ret is the JSON'ed User Document
    transform: function (doc, ret) {
      // We don't want to return the password back to the client
      delete ret.password
      return ret
    }
  }

})

 userSchema.pre('save', async function(next){
//   //this will only hash the password for our newly created user
   this.password = await bcrypt.hash(this.password, saltRounds
     )
     return next()
 })

module.exports = mongoose.model('User', userSchema)