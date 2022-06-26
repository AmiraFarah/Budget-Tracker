// import
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

//=======Middleware===========
app.use(express.json())

// check if we have a token and create
app.use(require('./config/checkToken'))

//===========route===========

//Users
app.use('/api/v1/users',require('./routes/api/users'))

// Protect API routes from unauthorized users
const ensureLoggedIn = require ('./config/ensureLoggedIn')

// Transactions
app.use('/api/v1/transactions',ensureLoggedIn, require('./routes/api/transactions.js'))


//==========port=============
const port = 9090
app.listen(port,()=> console.log(`Express app running on port ${port}`))




