const Transaction = require('../../models/Transaction')

// Find all accounts
// const index = async(req,res)=>{
//     try {
//            const transactions = await Transaction.find({})   
//              res.status(200).json(transactions)
//         } catch (e) {
//        res.status(400).json({msg:e.message}) 
//     }
// }

// Find a transactions for a specific user

const findTransByUserId = async(req,res)=>{
    try {
           const transactions = await Transaction.find({userId:req.params.id})   
             res.status(200).json(transactions)
        } catch (e) {
       res.status(400).json({msg:e.message}) 
    }
}

// create transaction per user 
const create = async(req, res)=>{
    try {
       req.body.userId = req.params.id
        const createdTransaction = await Transaction.create(req.body)
        res.status(200).json(createdTransaction)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}

// update account
const update = async(req, res)=>{
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedTransaction)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}


// delete  account
const remove = async(req, res)=>{
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedTransaction)
    } catch (e) {
        res.status(400).json({msg:e.message})
        
    }
}

module.exports = {
    //index,
    create,
    update,
    remove,
    findTransByUserId
}