// import
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

//=======Middleware===========
app.use(express.json())

//===========route===========
// Accounts
app.use('/api/v1/accounts', require('./routes/api/accounts.js'))

//==========port=============
const port = 9090
app.listen(port,()=> console.log(`Express app running on port ${port}`))




