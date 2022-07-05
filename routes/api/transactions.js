const express = require ('express')
const router = express.Router()
const transactionsCtrl = require ('../../controllers/api/transactions')

// GET /api/v1/transaction
 //router.get('/', transactionsCtrl.index)

// Get transactions 
router.get('/:id', transactionsCtrl.findTransByUserId)
//POST /api/v1/transactions
router.post('/:id', transactionsCtrl.create)


//PUT /api/v1/transaction/:id
router.put('/:id', transactionsCtrl.update)

//DELETE /api/transaction/:id
router.delete('/:id', transactionsCtrl.remove)

module.exports = router