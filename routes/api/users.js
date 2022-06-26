const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// GET /api/v1/users
 router.get('/:id', usersCtrl.show)

//POST /api/v1/users
router.post('/', usersCtrl.create)

//POST /api/v1/users/login
// router.post('/login', usersCtrl.login)


//PUT /api/v1/users/:id
 router.put('/:id', usersCtrl.update)



module.exports = router