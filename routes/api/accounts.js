const express = require ('express')
const router = express.Router()
const accountsCtrl = require ('../../controllers/api/accounts')

// GET /api/v1/accounts
router.get('/', accountsCtrl.index)

//POST /api/v1/accounts
router.post('/',accountsCtrl.create)

//PUT /api/v1/accounts/:id
router.put('/:id',accountsCtrl.update)

//DELETE /api/v1/accounts/:id
router.delete('/:id',accountsCtrl.remove)

module.exports = router