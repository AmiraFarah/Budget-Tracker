const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// crreate a user 
const create = async (req,res)=>{
   try{

    createdUser = await User.create(req.body)
    res.status(200).json(createdUser)
}
catch(e){
    res.status(400).json({msg:e.message})
}
}

// login
const login = async (req,res)=>{
    try {
        // find user by email 
        const user = await User.findOne({email:req.body.email})
        if(!user) throw new Error()
        // compare() takes the user unput from req.body and compares it with our db hashed password
        // compare ()incorporate the encoding process in the db hashed password and uses the same encoding process with the 
        // users input 
        const match = await bcrypt.compare(req.body.password,user.password)
        //if the pwd dont match trow error 
        if (!match) throw new Error()        

        // if password match then 
        res.status(200).json(createJWT(user))
    } catch (e) {
        res.status(401).json({
            msg:e.message,
            reason :" Bad Credential"
            
        })   
     }
}
// find a user 
const show = async (req, res) => {

    try {
       const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)

    } catch (e) {
        res.status(400).json({ msg: e.message })

    }
}

// update a user 
const update = async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
       const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedUser)

    } catch (e) {
        res.status(400).json({ msg: e.message })

    }
}

// Helper function
//secret key is private to ypu which means you will never reveal 
// that to the puplic or inject inside the JWT token.
const createJWT = user =>{
    return jwt.sign(
        {user},//payload
        process.env.secret,//secret
        {expiresIn :'48h'}//options
    )
}
module.exports = {
    create , 
    show ,
    update,
    login
}