const express = require ('express')
const router = express.Router()
const transactionsCtrl = require ('../../controllers/api/transactions')

// GET /api/v1/accounts
router.get('/', transactionsCtrl.index)

// Get transactions 
router.get('/user', transactionsCtrl.findTransByUserId)
//POST /api/v1/transactions
router.post('/', transactionsCtrl.create)


//PUT /api/v1/accounts/:id
router.put('/:id', transactionsCtrl.update)

//DELETE /api/v1/accounts/:id
router.delete('/:id', transactionsCtrl.remove)

module.exports = router