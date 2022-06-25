const express = require ('express')
const router = express.Router()
const accountsCtrl = require ('../../controllers/api/accounts')

// GET /api/v1/accounts
router.get('/', accountsCtrl.index)

module.exports = router