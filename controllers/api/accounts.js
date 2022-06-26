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

// create account 
const create = async(req, res)=>{
    try {
        const createdAccount = await Account.create(req.body)
        res.status(200).json(createdAccount)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}

// update account
const update = async(req, res)=>{
    try {
        const updatedAccount = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedAccount)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}


// delete  account
const remove = async(req, res)=>{
    try {
        const deletedAccount = await Account.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedAccount)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}