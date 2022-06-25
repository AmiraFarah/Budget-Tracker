const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
          accountNum :
                   { type : String,
                      unique : true ,
                      required : true },
         userName :
                   {type : String,
                   required:true ,
                   unique : true } ,
         password :
                   {type : String ,
                   required : true ,
                   unique : true ,
                    trim : true ,
                    minlength : 5},
         email :
                  { type : String,
                    required : true,
                    trime : true ,
                    unique : true ,
                    lowercase : true},
         deposit :
                  { type : Number },
         withdrawl :
                  { type : Number}
})

module.export= mongoose.model('User',userSchema)