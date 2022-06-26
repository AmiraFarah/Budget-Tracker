const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
         
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
        
})

module.exports= mongoose.model('User',userSchema)