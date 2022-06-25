const Account = require('../../models/Account')

// Find all accounts
const index = async(req,res)=>{
    try {
           const accounts = await Account.find({})   
             res.status(200).json(accounts)
        } catch (e) {
       res.status(400).json({msg:e.message}) 
    }
}
module.exports = {
    index
}