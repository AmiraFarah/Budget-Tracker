// import
const express = require('express')
const app = express()
require('dotenv').config()

//===========route===========

//==========port=============
const PORT = 9090
app.listen(PORT,()=> console.log(`Express app running on port ${PORT}`))




