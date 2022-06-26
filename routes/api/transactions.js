const express = require ('express')
const router = express.Router()
const transactionsCtrl = require ('../../controllers/api/transactions')

// GET /api/v1/accounts
router.get('/', transactionsCtrl.index)

//POST /api/v1/accounts
router.post('/', transactionsCtrl.create)

//PUT /api/v1/accounts/:id
router.put('/:id', transactionsCtrl.update)

//DELETE /api/v1/accounts/:id
router.delete('/:id', transactionsCtrl.remove)

module.exports = router